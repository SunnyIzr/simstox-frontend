import React from 'react'
import '../styles/Statistics.css';

var currencyFormatter = require('currency-formatter');

const PositionStatistics = ({ return_value, quantity, average_price, close_price, unrealized_pl }) => (
  <div>
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
          Quantity
        </div>
        <div className='value'>
          {quantity} Shares
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Average Cost per Share
        </div>
        <div className='value'>
          {currencyFormatter.format(average_price, { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Last Price
        </div>
        <div className='value'>
          {currencyFormatter.format(close_price, { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Change
        </div>
        <div className='value'>
          {currencyFormatter.format((close_price - average_price), { code: 'USD' })}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Unrealized P&L
        </div>
        <div className='value'>
          {currencyFormatter.format(unrealized_pl, { code: 'USD' })}
        </div>
      </li>
    </ul>

  </div>
)


export default PositionStatistics