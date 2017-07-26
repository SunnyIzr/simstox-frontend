import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
    return this.props.user.id != null
  }
  render(){
    const { user, login, logout } = this.props
    const isLoggedIn = this.isLoggedIn()
    return(
      <App 
        user={user}
        firstName={user.first_name}
        portfolios={user.portfolios}
        login={login}
        logout={logout}
        isLoggedIn={isLoggedIn}
      />
    )
  }
}

AppContainer.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
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
