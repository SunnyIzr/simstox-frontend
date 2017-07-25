import React from 'react';
import '../styles/TradeForm.css'
import '../styles/Dropdown.css'
import Dropdown from 'react-dropdown'
import StockPerformance from './StockPerformance'

var currencyFormatter = require('currency-formatter');
var MediaQuery = require('react-responsive');


const TradeForm = ( {
  ticker,
  quantity,
  price_cents,
  stockData,
  availableCash,
  portfolioOptions,
  defaultOption,
  goBack,
  handleSubmit,
  handlePortfolioSelect,
  handleTickerUpdate,
  handleQtyUpdate
}) => (
  <form className="trade-form col s12" onSubmit={handleSubmit}>
    <div className='row'>
      <a href='#Back' onClick={goBack} className='right close-btn'><i className="material-icons dp48">close</i><span></span></a>
    </div>
    <div className='row'>
      <MediaQuery query='(min-width: 993px)'>
        <div className='col s12 col l5'>
          <p>Portfolio</p>
            <Dropdown options={portfolioOptions} onChange={handlePortfolioSelect} value={defaultOption} placeholder="Select an option" />
            <p>Available Cash</p>
            <h3>{currencyFormatter.format(availableCash , { code: 'USD' })}</h3>
          <StockPerformance historical_data={stockData} />
        </div>
      </MediaQuery>
      <div className='col s12 col l7'>
        <MediaQuery query='(max-width: 992px)'>
          <div className='row'>
            <div className="col s12 l6">
              <p>Portfolio</p>
              <Dropdown options={portfolioOptions} onChange={handlePortfolioSelect} value={defaultOption} placeholder="Select an option" />
            </div>
            <div className="col s12 l6">
              <p>Available Cash</p>
              <h3>{currencyFormatter.format(availableCash , { code: 'USD' })}</h3>
            </div>
          </div>
        </MediaQuery>
        <div className="row">
          <div className="col s12 l6">
            <p>Ticker</p>
            <input id="ticker" type="text" className="qty-input" placeholder="Ticker" value={ticker} onChange={handleTickerUpdate}/>
          </div>
          <div className="col s12 l6">
            <p>Current Price</p>
            <h3>${ price_cents / 100.00 }</h3>
          </div>
          </div>
          <div className='row'>
          <div className="input-field col s12 l6">
            <p>Quantity</p>
            <input id="quantity" type="number" className="qty-input" placeholder="Quantity" onKeyUp={handleQtyUpdate}/>
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
      </div>
    </div>
  </form>
)

export default TradeForm;