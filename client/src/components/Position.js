import React, { Component } from 'react';
import PositionStatistics from './PositionStatistics'
import StockPerformance from './StockPerformance'
import '../styles/Positions.css'
import { Link } from 'react-router-dom'

var MediaQuery = require('react-responsive');

class Position extends Component {
  constructor(){
    super()
    this.state = {
      position: {intraday: []}
    }
  }

  componentDidMount(){
    let { portfolio_id, stock_id } = this.props.match.params
    let url = 'http://localhost:3001/portfolios/' + portfolio_id + "/stocks/" + stock_id

    fetch(url)
      .then(function(response) {
        return response.text()
      }).then(function(body){
        this.setState({position: JSON.parse(body)})
      }.bind(this))
  }

  render() {
    let { portfolio_id, portfolio_name, ticker, return_value, quantity, average_price, close_price, unrealized_pl, intraday } = this.state.position
    return (
      <div className='row'>
        <div className='col s12'>
          <nav className='breadcrumb-container'>
            <div className="nav-wrapper">
              
              <Link to={ "/portfolios/" + portfolio_id } className="breadcrumb">{ portfolio_name }</Link>
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
                <a className="waves-effect waves-light btn">Trade</a>
              </div>
            </MediaQuery>
            <div className="clearfix"></div>
          </div>
          <PositionStatistics ticker={ticker} return_value={return_value} quantity={quantity} average_price={average_price} close_price={close_price} unrealized_pl={unrealized_pl}/>
          <MediaQuery query='(max-width: 992px)'>
            <StockPerformance historical_data={intraday} />
          </MediaQuery>
        </div>
        <MediaQuery query='(min-width: 993px)'>
          <div className='col s12 col l5'>
              <div className='button-container'>
                <a className="waves-effect waves-light btn">Trade</a>
              </div>
            <StockPerformance historical_data={intraday} />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Position;