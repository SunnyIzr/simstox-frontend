import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// App components
import Home from './Home'
import User from './User'
import Portfolio from './Portfolio'
import Position from './Position'
import TopNav from './TopNav'
import MySideNav from './MySideNav'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <MySideNav />
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/position" component={Position} />  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
