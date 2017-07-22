import React from 'react'
import '../styles/PortfolioStatistic.css';


const PortfolioStatistics = ({ cash, market_value, total_value }) => (
  <div>
    <ul className="collection">
      <li className="collection-item">
        <div className='header'>
          Cash
        </div>
        <div className='value'>
          {cash}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Market Value
        </div>
        <div className='value'>
          {market_value}
        </div>
      </li>
      <li className="collection-item">
        <div className='header'>
          Total Value
        </div>
        <div className='value'>
          {total_value}
        </div>
      </li>
    </ul>

  </div>
)


export default PortfolioStatistics