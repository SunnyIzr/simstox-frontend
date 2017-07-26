import React from 'react';
import PortfolioStatistics from './PortfolioStatistics'
import Positions from './Positions'
import PortfolioPerformanceContainer from '../containers/PortfolioPerformanceContainer'
import Trades from './Trades'
import PositionBreakdownContainer from '../containers/PositionBreakdownContainer'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';

const Portfolio = ({
  name,
  returnValue,
  cash,
  marketValue,
  totalValue,
  historicalData,
  positions,
  recentTrades
}) => (
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
      <PortfolioStatistics name={name} returnValue={returnValue} cash={cash} marketValue={marketValue} totalValue={totalValue}/>
      <MediaQuery query='(max-width: 992px)'>
        <PortfolioPerformanceContainer historicalData={historicalData} />
      </MediaQuery>
      <Positions positions={positions}/>
      <Trades trades={recentTrades}/>
    </div>
    <MediaQuery query='(min-width: 993px)'>
      <div className="col s12 col l4">
        <PortfolioPerformanceContainer historicalData={historicalData} />
        <PositionBreakdownContainer positions={positions} />
      </div>
    </MediaQuery>
  </div>
)

export default Portfolio;