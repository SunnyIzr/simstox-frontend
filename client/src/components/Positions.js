import React from 'react'
import '../styles/Positions.css';
import PositionRow from './PositionRow'

const Positions = ({ positions }) => (
  <div>
    <h5>Positions</h5>
    <table className='responsive-table centered highlight bordered'>
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
            <PositionRow position={position} key={i} />
          )
        }
      </tbody>
    </table>
  </div>
)

export default Positions