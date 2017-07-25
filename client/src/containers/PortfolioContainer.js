import React, { Component } from 'react';
import Api from '../api'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {
  constructor(){
    super()
    this.state = {
      portfolio: {positions: [], recent_trades: [], historical_data: []}
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    Api.fetchPortfolio(id).then(body => {      
      this.setState({portfolio: JSON.parse(body)})
    })
  }

  render() {
    let { name, return_value, cash, market_value, total_value, positions, historical_data, recent_trades } = this.state.portfolio
    return (
      <Portfolio
        name={name}
        returnValue={return_value}
        cash={cash}
        marketValue={market_value}
        totalValue={total_value}
        historicalData={historical_data}
        positions={positions}
        recentTrades={recent_trades}
      />
    )
  }
}

export default PortfolioContainer;