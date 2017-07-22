import React from 'react'
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

const Trades = ({ trades }) => (
  <div>
    <h5>Recent Trades</h5>
    <table className='responsive-table centered highlight bordered'>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Date</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        { trades.map( (trade, i) =>
            <tr key={i}>
              <td>{trade.ticker}</td>
              <td>5/4/2017</td>
              <td>{currencyFormatter.format(trade.price, { code: 'USD' })}</td>
              <td>{trade.quantity}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default Trades