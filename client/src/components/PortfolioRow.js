import React from 'react';
import '../styles/Positions.css';

var currencyFormatter = require('currency-formatter');

const PortfolioRow = ({
  onClick,
  name,
  cash,
  marketValue,
  totalValue,
  totalPl,
  returnValue
}) => (
  <tr onClick={onClick}>
    <td>{name}</td>
    <td>{currencyFormatter.format(cash, { code: 'USD' })}</td>
    <td>{currencyFormatter.format(marketValue, { code: 'USD' })}</td>
    <td>{currencyFormatter.format(totalValue, { code: 'USD' })}</td>
    <td>{currencyFormatter.format(totalPl, { code: 'USD' })}</td>
    <td>{ returnValue }%</td>
  </tr>
)

export default PortfolioRow