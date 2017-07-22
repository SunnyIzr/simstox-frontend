import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

class PositionRow extends React.Component {
  constructor(){
    super()
    this.state={
      redirect: false
    }
    this.redirectToPosition = this.redirectToPosition.bind(this)
  }

  redirectToPosition(){
    this.setState({redirect: true})
  }

  render(){
    let { position } = this.props
    if (this.state.redirect) {
      return <Redirect push to="/position" />;
    }
    return(
      <tr onClick={this.redirectToPosition}>
        <td>{position.ticker}</td>
        <td>{position.quantity}</td>
        <td>{currencyFormatter.format(position.average_price, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(position.close_price, { code: 'USD' })}</td>
        <td className='hide-on-small-only'>{currencyFormatter.format(position.market_value, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(position.unrealized_pl, { code: 'USD' })}</td>
      </tr>
    )
  }
}

export default PositionRow