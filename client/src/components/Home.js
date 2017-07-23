import React, { Component } from 'react';
import '../styles/Home.css'
import LoginForm from './LoginForm'

class Home extends Component {
  render(){
    return(
      <div>
        <h2 className='home-message'> Welcome to the simstox </h2>
        <div className="row">
          <LoginForm login={this.props.login}/>
        </div>
      </div>
    )
  }
}

export default Home;