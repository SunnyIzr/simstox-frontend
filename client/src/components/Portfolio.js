import React, { Component } from 'react';
import portfolio from '../data/portfolio'
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'

class Portfolio extends Component {
  constructor(){
    super()
    this.state = portfolio
  }
  render() {
    let { name, cash, market_value, total_value, positions } = this.state
    return (
      <div>
        <h4> {name} </h4>
        <PortfolioStatistics cash={cash} market_value={market_value} total_value={total_value}/>
        <Positions positions={positions}/>
      </div>
    )
  }
}

export default Portfolio;