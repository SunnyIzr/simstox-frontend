import React, { Component } from 'react';
import '../styles/TradeForm.css'

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
      stockData: []
    }
    this.getPricing = this.getPricing.bind(this)
    this.handleQtyUpdate = this.handleQtyUpdate.bind(this)
    this.handleTickerUpdate = this.handleTickerUpdate.bind(this)
  }

  componentDidMount(){
    if (this.state.ticker.trim() != '') {
      this.getPricing()
    }
  }

  handleQtyUpdate(e){
    this.setState({quantity: e.target.value})
  }

  handleTickerUpdate(e){
   this.setState({ticker: e.target.value}) 
   this.getPricing(e.target.value)
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
        if ( data.status == 500 || data.status == 404 ){
          this.setState({stockData: []})
          this.setState({price_cents: 0})
        } else {
          this.setState({stockData: data})
          this.setState({price_cents: data[0][1]})
        }
      }.bind(this))

  }

  render(){
    let { ticker, quantity, price_cents, stockData } = this.state
    return(
      <form className="trade-form col s12">
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