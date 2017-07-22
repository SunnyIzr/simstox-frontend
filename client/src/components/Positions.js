import React from 'react'
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

const Positions = ({ positions }) => (
  <div>
    <h4>Positions</h4>
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Shares</th>
          <th>Avg Price</th>
          <th>Last Price</th>
          <th className='hide-on-small-only'>Market Value</th>
          <th>P&L</th>
        </tr>
      </thead>
      <tbody>
        { positions.map( (position, i) =>
            <tr>
              <td>{position.ticker}</td>
              <td>{position.quantity}</td>
              <td>{currencyFormatter.format(position.average_price, { code: 'USD' })}</td>
              <td>{currencyFormatter.format(position.close_price, { code: 'USD' })}</td>
              <td className='hide-on-small-only'>{currencyFormatter.format(position.market_value, { code: 'USD' })}</td>
              <td>{currencyFormatter.format(position.unrealized_pl, { code: 'USD' })}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default Positions