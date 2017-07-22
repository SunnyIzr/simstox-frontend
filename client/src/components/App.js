import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import Home from './Home'
import User from './User'
import Portfolio from './Portfolio'
import Position from './Position'
import TopNav from './TopNav'
import SideNav from './SideNav'



class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {}
    }
    this.login = this.login.bind(this)
  }

  login(userData){
    this.setState({user: userData })
  }

  render() {
    let { user } = this.state
    const isLoggedIn = this.state.user.id != null
    return (
      <BrowserRouter>
        <div className="container">
          <SideNav user={user} />
          <TopNav user={user} />

          { isLoggedIn ? (
            <div>
              <Switch>
                <Route path="/user" render={ (props) => <User {...props} user={user} />} />
                <Route path="/portfolios/:portfolio_id/positions/:stock_id" render={ (props) => <Position {...props} user={user} />} />  
                <Route path="/portfolios/:id" render={ (props) => <Portfolio {...props} user={user}/> } />
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
