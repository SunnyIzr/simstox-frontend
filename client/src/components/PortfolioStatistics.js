import React from 'react'
import '../styles/Statistics.css';

var currencyFormatter = require('currency-formatter');

const PortfolioStatistics = ({ name, return_value, cash, market_value, total_value }) => (
  <div>
    <h5>Summary - {name}</h5>
    <ul className="collection">
      <li className="collection-item">
        <div className='header'>
          Return
        </div>
        <div className='value'>
          { return_value * 100.00 }%
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Cash
        </div>
        <div className='value'>
          {currencyFormatter.format(cash, { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Market Value
        </div>
        <div className='value'>
          {currencyFormatter.format(market_value, { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Total Value
        </div>
        <div className='value'>
          {currencyFormatter.format(total_value, { code: 'USD' })}
        </div>
      </li>
    </ul>

  </div>
)


export default PortfolioStatistics