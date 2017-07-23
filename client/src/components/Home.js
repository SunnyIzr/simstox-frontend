import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Home.css'

class Home extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this)
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameUpdate(e){
    this.setState({username: e.target.value})
  }

  handlePasswordUpdate(e){
    this.setState({password: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.login(this.state)
  }

  render(){
    return(
      <div>
        <h2 className='home-message'> Welcome to the simstox </h2>
        <div className="row">
          <form className="login-form col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="username" type="text" className="validate" onChange={this.handleUsernameUpdate} placeholder="Username" />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={this.handlePasswordUpdate} placeholder="Password" />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <button className="btn waves-effect waves-light login-btn" type="submit" name="action">Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;