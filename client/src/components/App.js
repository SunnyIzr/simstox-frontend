import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Api from '../Api'

// App components
import Home from './Home'
import User from './User'
import TradeForm from './TradeForm'
import Portfolio from './Portfolio'
import Position from './Position'
import TopNav from './TopNav'
import SideNav from './SideNav'



class App extends Component {
  constructor(){
    super()
    this.state = {
      token: sessionStorage.token,
      user: {}
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
  }

  componentDidMount(){
    if (sessionStorage.token != null){
      this.fetchUser()
    }
  }

  login(loginData){
    Api.login(loginData).then(function(body){
      this.setState(JSON.parse(body))
      sessionStorage.setItem('token', JSON.parse(body).token)
    }.bind(this))
  }

  logout(){
    this.setState({token: null, user: {}})
    sessionStorage.clear()
  }

  fetchUser(){
    Api.fetchUser().then(body => {
      this.setState({user: JSON.parse(body)})
    })
  }

  render() {
    let { user } = this.state
    const isLoggedIn = this.state.user.id != null
    return (
      <BrowserRouter>
        <div className="container">
          <SideNav user={user} />
          <TopNav user={user} logout={this.logout} />

          { isLoggedIn ? (
            <div>
              <Switch>
                <Route path="/user" render={ (props) => <User {...props} user={user} />} />
                <Route path="/trade/:ticker" render={ (props) => <TradeForm {...props} user={user} />} />
                <Route path="/trade" render={ (props) => <TradeForm {...props} user={user} />} />
                <Route path="/portfolios/:portfolio_id/positions/:stock_id" render={ (props) => <Position {...props} user={user} />} />  
                <Route path="/portfolios/:id" render={ (props) => <Portfolio {...props} user={user}/> } />
                <Route path="/" render={ (props) => <User {...props} user={user} />} />
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
