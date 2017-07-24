import React, { Component } from 'react';
import '../styles/TradeForm.css'
import '../styles/Dropdown.css'
import Dropdown from 'react-dropdown'
import { Redirect } from 'react-router';

import StockPerformance from './StockPerformance'

var currencyFormatter = require('currency-formatter');
var MediaQuery = require('react-responsive');

class TradeForm extends Component {
  constructor(){
    super()
    this.state={
      ticker: '',
      quantity: 0,
      price_cents: 0,
      availableCash: 0,
      portfolioId: null,
      stockData: [],
      portfolioName: null,
      redirect: false
    }
    this.getPricing = this.getPricing.bind(this)
    this.handleQtyUpdate = this.handleQtyUpdate.bind(this)
    this.handleTickerUpdate = this.handleTickerUpdate.bind(this)
    this.handlePortfolioSelect = this.handlePortfolioSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.redirectToPortfolio = this.redirectToPortfolio.bind(this)
  }

  componentDidMount(){
    if (this.props.location.state.ticker != null){
      this.setState({ticker: this.props.location.state.ticker, price_cents: this.props.location.state.price_cents})
      this.getPricing(this.props.location.state.ticker)
    }
  }

  handleQtyUpdate(e){
    this.setState({quantity: e.target.value})
  }

  handleTickerUpdate(e){
   this.setState({ticker: e.target.value}) 
   this.getPricing(e.target.value)
  }

  handlePortfolioSelect(e){
    let portfolio = this.props.user.portfolios.find(portfolio => portfolio.id === e.value)
    this.setState({portfolioId: portfolio.id, portfolioName: portfolio.name, availableCash: portfolio.cash })
  }

  redirectToPortfolio(){
    this.setState({redirect: true})
  }

  getPricing(ticker){
    let url = 'http://localhost:3001/stocks/' + ticker + '/historical'
    let data = { 
      headers: {
        'Content-Type': 'application/json'
      }
    }
   fetch(url, data)
      .then(function(response) {
        return response.text()
      }).then(function(body) {
        let data = JSON.parse(body)
        if ( data.status === 500 || data.status === 404 ){
          this.setState({stockData: []})
          this.setState({price_cents: 0})
        } else {
          this.setState({stockData: data})
          this.setState({price_cents: data[0][1]})
        }
      }.bind(this))

  }

  handleSubmit(e){
    e.preventDefault()
    let { portfolioId, ticker, quantity, price_cents } = this.state
    let data = { 
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": sessionStorage.token
        },
        body: JSON.stringify({
          portfolio_id: portfolioId,
          ticker: ticker,
          quantity: quantity,
          price_cents: price_cents
        })
      }
    fetch('http://localhost:3001/trades', data)
      .then(function(response) {
        return response.text()
      }).then(function(body) {
        this.redirectToPortfolio()
      }.bind(this))
  }

  render(){
    let { ticker, quantity, price_cents, stockData, availableCash, redirect, portfolioId, portfolioName } = this.state
    let options = this.props.user.portfolios.map( (portfolio) => { 
      return {value: portfolio.id, label: portfolio.name}
    })
    let defaultOption = {value: portfolioId, label: portfolioName}

    if (redirect) {
      return <Redirect push to={"/portfolios/" + portfolioId } />;
    }
    return(
      <form className="trade-form col s12" onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className="col s12 l6">
            <p>Portfolio</p>
            <Dropdown options={options} onChange={this.handlePortfolioSelect} value={defaultOption} placeholder="Select an option" />
          </div>
          <div className="col s12 l6">
            <p>Available Cash</p>
            <h3>{currencyFormatter.format(availableCash , { code: 'USD' })}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <p>Ticker</p>
            <input id="ticker" type="text" className="qty-input" placeholder="Ticker" value={ticker} onChange={this.handleTickerUpdate}/>
          </div>
          <div className="col s12 l6">
            <p>Current Price</p>
            <h3>${ price_cents / 100.00 }</h3>
          </div>
          </div>
          <div className='row'>
          <div className="input-field col s12 l6">
            <p>Quantity</p>
            <input id="quantity" type="number" className="qty-input" placeholder="Quantity" onKeyUp={this.handleQtyUpdate}/>
          </div>
          <div className="col s12 l6">
            <p>Total</p>
            <h3 className='trade-total'>
            { currencyFormatter.format( ( ( quantity * price_cents ) / 100.00 ), { code: 'USD' }) }</h3>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <button className="btn waves-effect waves-light trade-btn" type="submit" name="action">BUY
            </button>
          </div>
        </div>
        <MediaQuery query='(min-width: 993px)'>
          <StockPerformance historical_data={stockData} />
        </MediaQuery>
      </form>
    )
  }
}

export default TradeForm;