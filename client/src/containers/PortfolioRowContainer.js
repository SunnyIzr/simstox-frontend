import React from 'react';
import { Redirect } from 'react-router';
import '../styles/Positions.css';
import PortfolioRow from '../components/PortfolioRow'

class PortfolioRowContainer extends React.Component {
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
    let { id, name, cash, market_value, total_value, total_pl, return_value } = this.props.portfolio
    if (this.state.redirect) {
      return <Redirect push to={"/portfolios/" + id} />;
    }
    return(
      <PortfolioRow 
        onClick={this.redirectToPortfolio}
        name={name}
        cash={cash}
        marketValue={market_value}
        totalValue={total_value}
        totalPl={total_pl}
        returnValue={return_value}
      />
    )
  }
}

export default PortfolioRowContainer