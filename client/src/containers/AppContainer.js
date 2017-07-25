import React, { Component } from 'react';
import '../styles/App.css';
import Api from '../api'


import App from '../components/App'

import { fetchUserIfNeeded, loginUser, logoutUser } from '../actions/user'



class AppContainer extends Component {
  constructor(){
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
  }

  componentDidMount(){
    const dispatch = this.props.store.dispatch
    dispatch(fetchUserIfNeeded,dispatch)
  }

  login(loginData){
    const dispatch = this.props.store.dispatch
    dispatch(loginUser(loginData))
  }

  logout(){
    const dispatch = this.props.store.dispatch
    dispatch(logoutUser())
  }

  fetchUser(){
    Api.fetchUser().then(body => {
      this.setState({user: JSON.parse(body)})
    })
  }

  render() {
    let { user } = this.props
    const isLoggedIn = user.id != null
    return (
      <App 
        user={user} 
        firstName={user.first_name}
        login={this.login}
        logout={this.logout}
        portfolios={user.portfolios}
        isLoggedIn={isLoggedIn}
      />
    )
  }
}

export default AppContainer;
