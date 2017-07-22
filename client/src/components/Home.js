import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(){
    super()
    this.state ={
      users: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/users')
      .then(function(response) {
        return response.text()
      }).then(function(body) {
        this.setState({users: JSON.parse(body)})
      }.bind(this))
  }
  render(){
    let { users } = this.state
    return(
      <div>
        <h2> Welcome to the simstox </h2>
        <ul className="collection">
          {users.map( (user, i) => 
            <Link to='/user' key={i} onClick={(e) => this.props.login(user) }>
              <li className="collection-item" >
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