import React from 'react'
import PortfolioRowContainer from '../containers/PortfolioRowContainer'

const Portfolios = ({ portfolios }) => (
  <div>
    { portfolios.length === 0 ? (
      <h5>You have no portfolios. Create one!</h5>
    ) : (
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
                <PortfolioRowContainer portfolio={portfolio} key={i} />
              )
            }
          </tbody>
        </table>
      </div>
    )}
  </div>
)

export default Portfolios