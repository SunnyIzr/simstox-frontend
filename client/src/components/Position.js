import React, { Component } from 'react';
import position from '../data/position'
import PositionStatistics from './PositionStatistics'
import StockPerformance from './StockPerformance'
import '../styles/Positions.css'


class Position extends Component {
  constructor(){
    super()
    this.state = position
  }
  render() {
    let { ticker, return_value, quantity, average_price, close_price, unrealized_pl, intraday } = this.state
    return (
      <div className='row'>
        <div className='header-container'>
          <div className='left'>
            <h2>{ticker}</h2>
          </div>
          <div className='button-container'>
            <a className="waves-effect waves-light btn">Trade</a>
          </div>
          <div className="clearfix"></div>
        </div>
        <PositionStatistics ticker={ticker} return_value={return_value} quantity={quantity} average_price={average_price} close_price={close_price} unrealized_pl={unrealized_pl}/>
        <StockPerformance historical_data={intraday} />
      </div>
    )
  }
}

export default Position;