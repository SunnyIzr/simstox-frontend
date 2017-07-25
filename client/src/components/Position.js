import React from 'react';
import PositionStatistics from './PositionStatistics'
import StockPerformanceContainer from '../containers/StockPerformanceContainer'
import '../styles/Positions.css'
import { Link } from 'react-router-dom'

var MediaQuery = require('react-responsive');

const Position = ({
  portfolioId,
  portfolioName,
  ticker,
  intraday,
  returnValue,
  quantity,
  averagePrice,
  closePrice,
  unrealizedPl
}) => (
  <div className='row'>
    <div className='col s12'>
      <nav className='breadcrumb-container'>
        <div className="nav-wrapper">
          
          <Link to={ "/portfolios/" + portfolioId } className="breadcrumb">{ portfolioName }</Link>
          <a href="#!" className="breadcrumb">{ ticker }</a>
        </div>
      </nav>
    </div>
    <div className='col s12 col l7'>

      <div className='header-container'>
        <div className='left'>
          <h2>{ticker}</h2>
        </div>
        <MediaQuery query='(max-width: 992px)'>
          <div className='button-container'>
            <Link to={{pathname: '/trade', state: {ticker: ticker, price_cents: ( intraday[0][1] * 100 ) }}} className="waves-effect waves-light btn">Trade</Link>
          </div>
        </MediaQuery>
        <div className="clearfix"></div>
      </div>
      <PositionStatistics ticker={ticker} returnValue={returnValue} quantity={quantity} averagePrice={averagePrice} closePrice={closePrice} unrealizedPl={unrealizedPl}/>
      <MediaQuery query='(max-width: 992px)'>
        <StockPerformanceContainer historical_data={intraday} />
      </MediaQuery>
    </div>
    <MediaQuery query='(min-width: 993px)'>
      <div className='col s12 col l5'>
          <div className='button-container'>
            <Link to={{pathname: '/trade', state: {ticker: ticker, price_cents: ( intraday[0][1] * 100 ) }}} className="waves-effect waves-light btn">Trade</Link>
          </div>
        <StockPerformanceContainer historical_data={intraday} />
      </div>
    </MediaQuery>
  </div>
)

export default Position;