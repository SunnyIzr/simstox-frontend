import React, {Component} from 'react'
import { Chart } from 'chart.js'
import PortfolioPerformance from '../components/PortfolioPerformance'

class PortfolioPerformanceContainer extends Component{
  componentDidMount(){
    this.renderChart()
  }

  componentDidUpdate(){
    this.renderChart()
  }

  renderChart(){
    let { historicalData } = this.props
    let ctx = document.getElementById("portfolioPerformance");
    let labels = historicalData.map( (dataPoint,k) => 
      dataPoint.time 
    )
    let values = historicalData.map( (dataPoint,k) => 
      dataPoint.total_value 
    )  

    new Chart(ctx, {
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
      <PortfolioPerformance />
    )
  }
}


export default PortfolioPerformanceContainer