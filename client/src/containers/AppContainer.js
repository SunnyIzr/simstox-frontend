import React, { Component } from 'react';
import { connect } from 'react-redux'
import Session from '../session/session'
import App from '../components/App'

import { fetchUser, loginUser, logoutUser } from '../actions/user'


class AppContainer extends Component {
  constructor(props, context){
    super();
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }
  componentDidMount(){
    if (Session.isLoggedIn()){
      this.props.fetchUser()
    }
  }
  isLoggedIn(){
    return this.props.userId != null
  }
  render(){
    const { firstName, portfolios, login, logout } = this.props
    const isLoggedIn = this.isLoggedIn()
    return(
      <App 
        firstName={firstName}
        portfolios={portfolios}
        login={login}
        logout={logout}
        isLoggedIn={isLoggedIn}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.data.id,
    firstName: state.user.data.first_name,
    portfolios: state.user.data.portfolios,
    isLoggedIn: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => {
      dispatch(loginUser(loginData))
    },
    logout: () => {
      dispatch(logoutUser())
    },
    fetchUser: () => {
      dispatch(fetchUser())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
