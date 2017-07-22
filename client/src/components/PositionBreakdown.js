import React, {Component} from 'react'
import { Chart } from 'chart.js'
import '../styles/Chart.css';



class PositionBreakdown extends Component{
  componentDidMount(){
    let { positions } = this.props
    let ctx = document.getElementById("pieChart");
    let labels = positions.map( (position,k) => 
      position.ticker 
    )
    let values = positions.map( (position,k) => 
      position.market_value 
    )  

    let pieChart = new Chart(ctx, {
    type: 'pie',
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
        borderWidth: 1
      }]
    },
    options: {
    }
});
  }
  render(){
    return(
      <div>
        <h5>Breakdown</h5>
        <div className='chart-container'>
          <canvas id="pieChart"></canvas>
        </div>
      </div>
    )
  }
}


export default PositionBreakdown