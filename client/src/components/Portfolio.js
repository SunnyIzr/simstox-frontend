import React, { Component } from 'react';
import portfolio from '../data/portfolio'
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'
import HistoricalPerformance from './HistoricalPerformance'
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
          <h4> {name} </h4>
          <PortfolioStatistics return_value={return_value} cash={cash} market_value={market_value} total_value={total_value}/>
          <MediaQuery query='(max-width: 992px)'>
            <HistoricalPerformance historical_data={historical_data} />
          </MediaQuery>
          <Positions positions={positions}/>
        </div>
        <MediaQuery query='(min-width: 993px)'>
          <div className="col s12 col l4">
            <HistoricalPerformance historical_data={historical_data} />
            <PositionBreakdown positions={positions} />
            <Trades trades={recent_trades}/>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Portfolio;