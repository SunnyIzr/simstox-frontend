import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

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
          <SideNav />
          <TopNav />
          { isLoggedIn ? (
            <div>
              <Route path="/user" render={ () => <User user={user} />} />
              <Route path="/portfolio" render={ () => <Portfolio user={user} />} />
              <Route path="/position" render={ () => <Position user={user} />} />  
            </div>
          ) : (
            <div>
              <Route path="/*" render={ () => <p>You are not logged in</p>} />
              <Route path="/*" render={ () => <Home login={this.login}/>}/>
            </div>

          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
