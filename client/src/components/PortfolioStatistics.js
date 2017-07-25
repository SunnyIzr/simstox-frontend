import React from 'react'
import '../styles/Statistics.css';

var currencyFormatter = require('currency-formatter');

const PortfolioStatistics = ({ name, returnValue, cash, marketValue, totalValue }) => (
  <div>
    <h5>Summary</h5>
    <ul className="collection">
      <li className="collection-item">
        <div className='header'>
          Return
        </div>
        <div className='value'>
          { returnValue }%
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
          {currencyFormatter.format(marketValue, { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Total Value
        </div>
        <div className='value'>
          {currencyFormatter.format(totalValue, { code: 'USD' })}
        </div>
      </li>
    </ul>

  </div>
)


export default PortfolioStatistics