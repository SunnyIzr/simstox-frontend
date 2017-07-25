import React from 'react';
import '../styles/User.css'
import Portfolios from './Portfolios'
import { Link } from 'react-router-dom'


const User = ( {firstName, portfolios }) => (
  <div>
    <div className='greet'>
      <h2> Welcome {firstName}. </h2>
      <h4> It's a great day to trade. </h4>
    </div>
    <div className='user-btn-container center'>
      <Link to="/trade" className="waves-effect waves-light btn">Trade</Link>
    </div>
    <div className='clearfix'></div>
    <Portfolios portfolios={portfolios} />
  </div>
)

export default User;