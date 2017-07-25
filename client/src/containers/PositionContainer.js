import React, { Component } from 'react';
import Api from '../api'
import Position from '../components/Position'

class PositionContainer extends Component {
  constructor(){
    super()
    this.state = {
      position: {intraday: [[]]}
    }
  }

  componentDidMount(){
    const portfolioId = this.props.match.params.portfolio_id
    const stockId = this.props.match.params.stock_id
    Api.fetchPosition(portfolioId, stockId).then(body => {
      this.setState({position: JSON.parse(body)})
    })
  }

  render() {
    let { portfolio_id, portfolio_name, ticker, return_value, quantity, average_price, close_price, unrealized_pl, intraday } = this.state.position
    return (
      <Position
        portfolioId={portfolio_id}
        portfolioName={portfolio_name}
        ticker={ticker}
        intraday={intraday}
        returnValue={return_value}
        quantity={quantity}
        averagePrice={average_price}
        closePrice={close_price}
        unrealizedPl={unrealized_pl}
      />
    )
  }
}

export default PositionContainer;