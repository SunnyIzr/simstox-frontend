import React from 'react';
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
    let { ticker, quantity, average_price, close_price, market_value, unrealized_pl } = this.props.position
    if (this.state.redirect) {
      return <Redirect push to="/position" />;
    }
    return(
      <tr onClick={this.redirectToPosition}>
        <td>{ticker}</td>
        <td>{quantity}</td>
        <td>{currencyFormatter.format(average_price, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(close_price, { code: 'USD' })}</td>
        <td className='hide-on-small-only'>{currencyFormatter.format(market_value, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(unrealized_pl, { code: 'USD' })}</td>
      </tr>
    )
  }
}

export default PositionRow