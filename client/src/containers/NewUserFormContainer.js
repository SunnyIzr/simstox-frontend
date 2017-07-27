import React, { Component } from 'react';
import NewUserForm from '../components/NewUserForm';

class NewUserFormContainer extends Component {
  constructor(){
    super()
    this.state={
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    }
    this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this)
    this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this)
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this)
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this)
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstNameUpdate(e){
    this.setState({first_name: e.target.value})
  }
  
  handleLastNameUpdate(e){
    this.setState({last_name: e.target.value})
  }

  handleEmailUpdate(e){
    this.setState({email: e.target.value})
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
      <NewUserForm
        handleSubmit={this.handleSubmit}
        handleFirstNameUpdate={this.handleFirstNameUpdate}
        handleLastNameUpdate={this.handleLastNameUpdate}
        handleEmailUpdate={this.handleEmailUpdate}
        handleUsernameUpdate={this.handleUsernameUpdate}
        handlePasswordUpdate={this.handlePasswordUpdate}
      />
    )
  }
}

export default NewUserFormContainer;