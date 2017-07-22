import React, {Component} from 'react'
import { Chart } from 'chart.js'
import '../styles/Chart.css';



class PortfolioPerformance extends Component{
  componentDidMount(){
    let { historical_data } = this.props
    let ctx = document.getElementById("portfolioPerformance");
    let labels = historical_data.map( (dataPoint,k) => 
      dataPoint.time 
    )
    let values = historical_data.map( (dataPoint,k) => 
      dataPoint.total_value 
    )  

    let portfolioPerformanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Market Value',
        data: values,
        backgroundColor: [
          'rgba(67, 172, 172, 0.2)'
        ],
        borderColor: [
          'rgba(67,172,172,1)'
        ],
        borderWidth: 1,
        fill: false,
        pointHoverBorderWidth: 0
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          }
        }]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
});
  }
  render(){
    return(
      <div>
        <h5>Performance</h5>
        <div className='chart-container'>
          <canvas id="portfolioPerformance"></canvas>
        </div>
      </div>
    )
  }
}


export default PortfolioPerformance