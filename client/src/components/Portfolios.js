import React from 'react'
import PortfolioRow from './PortfolioRow'

const Portfolios = ({ portfolios }) => (
  <div>
    <h5>Portfolios</h5>
    <table className='responsive-table centered highlight bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cash</th>
          <th>Market Value</th>
          <th>Total Value</th>
          <th>Total P&L</th>
          <th>Return</th>
        </tr>
      </thead>
      <tbody>
        { portfolios.map( (portfolio, i) =>
            <PortfolioRow portfolio={portfolio} key={i} />
          )
        }
      </tbody>
    </table>
  </div>
)

export default Portfolios