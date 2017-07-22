import React, { Component } from 'react';
import portfolio from '../data/portfolio'
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'
import HistoricalPerformance from './HistoricalPerformance'

class Portfolio extends Component {
  constructor(){
    super()
    this.state = portfolio
  }
  render() {
    let { name, cash, market_value, total_value, positions, historical_data } = this.state
    return (
      <div>
        <h4> {name} </h4>
        <PortfolioStatistics cash={cash} market_value={market_value} total_value={total_value}/>
        <HistoricalPerformance historical_data={historical_data} />
        <Positions positions={positions}/>
      </div>
    )
  }
}

export default Portfolio;