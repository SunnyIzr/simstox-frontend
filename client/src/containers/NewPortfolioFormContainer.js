import React, { Component } from 'react';
import NewPortfolioForm from '../components/NewPortfolioForm';
import { Redirect } from 'react-router';
import Api from '../api'

class NewPortfolioFormContainer extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      portfolioId: null,
      redirect: false
    }
    this.handleNameUpdate = this.handleNameUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.redirectToPortfolio = this.redirectToPortfolio.bind(this)
  }

  handleNameUpdate(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const { name } = this.state
    const data = {
          name: name
        }

    Api.createPortfolio(data).then(body => {
        const portId = JSON.parse(body).id
        this.redirectToPortfolio(portId)
      })
  }

  redirectToPortfolio(portId){
    this.setState({portfolioId: portId, redirect: true})
  }


  render(){
    const { redirect, portfolioId } = this.state
    const goBack = this.props.history.goBack
    if (redirect) {
      return <Redirect push to={"/portfolios/" + portfolioId } />;
    }
    return(
      <NewPortfolioForm
        handleSubmit={this.handleSubmit}
        handleNameUpdate={this.handleNameUpdate}
        goBack={goBack}
      />
    )
  }
}

export default NewPortfolioFormContainer;