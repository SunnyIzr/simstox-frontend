import React, {Component} from 'react'
import { Chart } from 'chart.js'
import StockPerformance from '../components/StockPerformance'

class StockPerformanceContainer extends Component{
  componentDidMount(){
    this.renderChart()
  }

  componentDidUpdate(){
    this.renderChart()
  }

  renderChart(){
    let { historical_data } = this.props
    let ctx = document.getElementById("stockPerformance");
    let labels = historical_data.map( (dataPoint,k) => 
      dataPoint[0] 
    )
    let values = historical_data.map( (dataPoint,k) => 
      dataPoint[1]
    )
    new Chart(ctx, {
      type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Price',
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
                beginAtZero:false
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
      }
    );
  }

  render(){
    return(
      <StockPerformance />
    )
  }
}


export default StockPerformanceContainer