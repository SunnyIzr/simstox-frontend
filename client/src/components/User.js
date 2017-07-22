import React, { Component } from 'react';
import user from '../data/user';
import '../styles/User.css'
import Portfolios from './Portfolios'

class User extends Component {
  constructor(){
    super()
    this.state = user
  }
  render() {
    let { first_name, last_name, username, portfolios } = this.state
    return (
      <div>
        <div className='greet'>
          <h2> Welcome {first_name}. </h2>
          <h4> It's a great day to trade. </h4>
        </div>
        <div className='user-btn-container center'>
          <a className="waves-effect waves-light btn">Trade</a>
        </div>
        <div className='clearfix'></div>
        <Portfolios portfolios={portfolios} />
      </div>
    )
  }
}

export default User;