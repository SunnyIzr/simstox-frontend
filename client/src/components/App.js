import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Api from '../api'

// Containers
import PortfolioContainer from '../containers/PortfolioContainer'
import TradeFormContainer from '../containers/TradeFormContainer'
import SideNavContainer from '../containers/SideNavContainer'
import PositionContainer from '../containers/PositionContainer'

// App components
import Home from './Home'
import User from './User'
import TopNav from './TopNav'

import { fetchUserIfNeeded, loginUser, logoutUser } from '../actions/user'



class App extends Component {
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
      <BrowserRouter>
        <div className="container">
          <SideNavContainer user={user} />
          <TopNav firstName={user.first_name} logout={this.logout} />

          { isLoggedIn ? (
            <div>
              <Switch>
                <Route path="/user" render={ (props) => <User firstName={user.first_name} portfolios={user.portfolios} />} />
                <Route path="/trade/:ticker" render={ (props) => <TradeFormContainer {...props} user={user} />} />
                <Route path="/trade" render={ (props) => <TradeFormContainer {...props} user={user} />} />
                <Route path="/portfolios/:portfolio_id/positions/:stock_id" render={ (props) => <PositionContainer {...props} user={user} />} />  
                <Route path="/portfolios/:id" render={ (props) => <PortfolioContainer {...props} user={user}/> } />
                <Route path="/" render={ (props) => <User firstName={user.first_name} portfolios={user.portfolios} />} />
              </Switch>
            </div>
          ) : (
            <div>
              <Route path="/*" render={ () => <p>You are not logged in</p>} />
              <Route path="/*" render={ (props) => <Home {...props} login={this.login}/>}/>
            </div>
          )}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
