import React, {Component} from 'react'
import { Chart } from 'chart.js'
import PositionBreakdown from '../components/PositionBreakdown'



class PositionBreakdownContainer extends Component{
  componentDidMount(){
    this.renderChart()
  }

  componentDidUpdate(){
    this.renderChart()
  }

  renderChart(){
    let { positions } = this.props
    let ctx = document.getElementById("pieChart");
    let labels = positions.map( (position,k) => 
      position.ticker 
    )
    let values = positions.map( (position,k) => 
      position.market_value 
    )  

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Market Value',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend:{
          display: false
        }
      }
    });
  }
  render(){
    return(
      <PositionBreakdown />
    )
  }
}


export default PositionBreakdownContainer