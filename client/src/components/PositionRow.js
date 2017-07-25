import React from 'react';
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

const PositionRow = ({
  ticker,
  quantity,
  averagePrice,
  closePrice,
  marketValue,
  unrealizedPl
}) => (
  <tr onClick={this.redirectToPosition}>
    <td>{ticker}</td>
    <td>{quantity}</td>
    <td>{currencyFormatter.format(averagePrice, { code: 'USD' })}</td>
    <td>{currencyFormatter.format(closePrice, { code: 'USD' })}</td>
    <td className='hide-on-small-only'>{currencyFormatter.format(marketValue, { code: 'USD' })}</td>
    <td>{currencyFormatter.format(unrealizedPl, { code: 'USD' })}</td>
  </tr>
)

export default PositionRow