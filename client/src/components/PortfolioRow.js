import React from 'react';
import { Redirect } from 'react-router';
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

class PortfolioRow extends React.Component {
  constructor(){
    super()
    this.state={
      redirect: false
    }
    this.redirectToPortfolio = this.redirectToPortfolio.bind(this)
  }

  redirectToPortfolio(){
    this.setState({redirect: true})
  }

  render(){
    let { name, cash, market_value, total_value, total_pl, return_value } = this.props.portfolio
    if (this.state.redirect) {
      return <Redirect push to="/portfolio" />;
    }
    return(
      <tr onClick={this.redirectToPortfolio}>
        <td>{name}</td>
        <td>{currencyFormatter.format(cash, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(market_value, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(total_value, { code: 'USD' })}</td>
        <td>{currencyFormatter.format(total_pl, { code: 'USD' })}</td>
        <td>{ return_value * 100.00 }%</td>
      </tr>
    )
  }
}

export default PortfolioRow