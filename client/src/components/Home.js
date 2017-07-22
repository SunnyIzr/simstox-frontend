import React, { Component } from 'react';
import users from '../data/users'
import { Link } from 'react-router-dom'

class Home extends Component {
  render(){
    return(
      <div>
        <h2> Welcome to the simstox </h2>
        <ul className="collection">
          {users.map( (user, i) => 
            <Link to='/user'>
              <li className="collection-item" key={i}>
                  { user.first_name } { user.last_name }
              </li>
            </Link>
          )}
        </ul>
      </div>
    )
  }
}

export default Home;