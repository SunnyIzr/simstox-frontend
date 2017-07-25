import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends Component {
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
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleUsernameUpdate={this.handleUsernameUpdate}
        handlePasswordUpdate={this.handlePasswordUpdate}
      />
    )
  }
}

export default LoginFormContainer;