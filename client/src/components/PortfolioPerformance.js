import React from 'react'
import '../styles/Chart.css';


const PortfolioPerformance = () => (
  <div>
    <h5>Performance</h5>
    <div className='chart-container'>
      <canvas id="portfolioPerformance"></canvas>
    </div>
  </div>
)

export default PortfolioPerformance