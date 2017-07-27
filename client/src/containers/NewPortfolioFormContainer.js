import React, { Component } from 'react';
import NewPortfolioForm from '../components/NewPortfolioForm';

class NewPortfolioFormContainer extends Component {
  constructor(){
    super()
    this.state={
      name: ''
    }
    this.handleNameUpdate = this.handleNameUpdate.bind(this)
  }

  handleNameUpdate(e){
    this.setState({first_name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("New Portfolio")
  }

  render(){
    return(
      <NewPortfolioForm
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

export default NewPortfolioFormContainer;