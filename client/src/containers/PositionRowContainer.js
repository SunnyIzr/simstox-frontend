import React from 'react';
import { Redirect } from 'react-router';
import PositionRow from '../components/PositionRow'

class PositionRowContainer extends React.Component {
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
    let { portfolio_id, stock_id, ticker, quantity, average_price, close_price, market_value, unrealized_pl } = this.props.position
    if (this.state.redirect) {
      return <Redirect push to={"/portfolios/" + portfolio_id + "/positions/" + stock_id} />;
    }
    return(
      <PositionRow
        onClick={this.redirectToPosition}
        ticker={ticker}
        quantity={quantity}
        averagePrice={average_price}
        closePrice={close_price}
        marketValue={market_value}
        unrealizedPl={unrealized_pl}
      />
    )
  }
}

export default PositionRowContainer