import React from 'react'
import '../styles/PortfolioStatistic.css';

var currencyFormatter = require('currency-formatter');

const PortfolioStatistics = ({ cash, market_value, total_value }) => (
  <div>
    <ul className="collection">
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