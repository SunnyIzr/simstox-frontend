import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Api from '../api'
import TradeForm from '../components/TradeForm'

class TradeFormContainer extends Component {
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
    if (this.props.location.state != null && this.props.location.state.ticker != null){
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
    let portfolio = this.props.portfolios.find(portfolio => portfolio.id === e.value)
    this.setState({portfolioId: portfolio.id, portfolioName: portfolio.name, availableCash: portfolio.cash })
  }

  redirectToPortfolio(){
    this.setState({redirect: true})
  }

  getPricing(ticker){
    
   Api.getPricing(ticker).then(body => {
        let data = JSON.parse(body)
        if ( data.status === 500 || data.status === 404 ){
          this.setState({stockData: [], price_cents: 0})
        } else {
          this.setState({stockData: data, price_cents: data[0][1]})
        }
      })
  }

  handleSubmit(e){
    e.preventDefault()
    const { portfolioId, ticker, quantity, price_cents } = this.state
    const data = {
          portfolio_id: portfolioId,
          ticker: ticker,
          quantity: quantity,
          price_cents: price_cents
        }

    Api.createTrade(data).then(body => {
        this.redirectToPortfolio()
      })
  }

  render(){
    const { ticker, quantity, price_cents, stockData, availableCash, redirect, portfolioId, portfolioName } = this.state
    const portfolioOptions = this.props.portfolios.map( (portfolio) => { 
      return {value: portfolio.id, label: portfolio.name}
    })
    const defaultOption = {value: portfolioId, label: portfolioName}
    const goBack = this.props.history.goBack

    if (redirect) {
      return <Redirect push to={"/portfolios/" + portfolioId } />;
    }
    return(
      <TradeForm 
        ticker={ticker}
        quantity={quantity}
        price_cents={price_cents}
        stockData={stockData}
        availableCash={availableCash}
        portfolioOptions={portfolioOptions}
        defaultOption={defaultOption}
        goBack={goBack}
        handleSubmit={this.handleSubmit}
        handlePortfolioSelect={this.handlePortfolioSelect}
        handleTickerUpdate={this.handleTickerUpdate}
        handleQtyUpdate={this.handleQtyUpdate}
      />
    )
  }
}

export default TradeFormContainer;