import React, { Component } from 'react';
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'
import PortfolioPerformance from './PortfolioPerformance'
import Trades from './Trades'
import PositionBreakdown from './PositionBreakdown'
import { Link } from 'react-router-dom'
var MediaQuery = require('react-responsive');

class Portfolio extends Component {
  constructor(){
    super()
    this.state = {
      portfolio: {positions: [], recent_trades: [], historical_data: []}
    }
  }

  componentDidMount(){
    let url='http://localhost:3001/portfolios/' + this.props.match.params.id
    fetch(url)
      .then(function(response) {
        return response.text()
      }).then(function(body) {
        this.setState({portfolio: JSON.parse(body)})
      }.bind(this))
  }

  render() {
    let { name, return_value, cash, market_value, total_value, positions, historical_data, recent_trades } = this.state.portfolio
    return (
      <div className="row">
        <div className='col s12'>
          <nav className='breadcrumb-container'>
            <div className="nav-wrapper">
                <Link to="/user" className="breadcrumb">Home</Link>
                <a href="#!" className="breadcrumb">{ name }</a>
            </div>
          </nav>
        </div>
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