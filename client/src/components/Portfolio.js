import React, { Component } from 'react';
import portfolio from '../data/portfolio'
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'
import PortfolioPerformance from './PortfolioPerformance'
import Trades from './Trades'
import PositionBreakdown from './PositionBreakdown'
var MediaQuery = require('react-responsive');

class Portfolio extends Component {
  constructor(){
    super()
    this.state = portfolio
  }
  render() {
    let { name, return_value, cash, market_value, total_value, positions, historical_data, recent_trades } = this.state
    return (
      <div className="row">
        <div className="col s12 col l8">
          <PortfolioStatistics name={name} return_value={return_value} cash={cash} market_value={market_value} total_value={total_value}/>
          <MediaQuery query='(max-width: 992px)'>
            <PortfolioPerformance historical_data={historical_data} />
          </MediaQuery>
          <Positions positions={positions}/>
          <Trades trades={recent_trades}/>
        </div>
        <MediaQuery query='(min-width: 993px)'>
          <div className="col s12 col l4">
            <PortfolioPerformance historical_data={historical_data} />
            <PositionBreakdown positions={positions} />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Portfolio;