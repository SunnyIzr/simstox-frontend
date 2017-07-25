import React from 'react'
import '../styles/Chart.css';


const StockPerformance = () => (
  <div>
    <h5>Intraday</h5>
    <div className='chart-container'>
      <canvas id="stockPerformance"></canvas>
    </div>
  </div>
)

export default StockPerformance