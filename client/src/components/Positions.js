import React from 'react'
import '../styles/Positions.css';

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
              <td>{position.average_price}</td>
              <td>{position.close_price}</td>
              <td className='hide-on-small-only'>{position.market_value}</td>
              <td>{position.unrealized_pl}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default Positions