import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import PortfolioContainer from '../containers/PortfolioContainer'
import TradeFormContainer from '../containers/TradeFormContainer'
import SideNavContainer from '../containers/SideNavContainer'
import PositionContainer from '../containers/PositionContainer'
import NewUserFormContainer from '../containers/NewUserFormContainer'

// App components
import Home from './Home'
import User from './User'
import TopNav from './TopNav'

const App = ({
  firstName,
  portfolios,
  login,
  logout,
  isLoggedIn


}) => (
  <BrowserRouter>
    <div className="container">
      <SideNavContainer portfolios={portfolios} isLoggedIn={isLoggedIn}/>
      <TopNav firstName={firstName} logout={logout} />

      { isLoggedIn ? (
        <div>
          <Switch>
            <Route path="/user" render={ (props) => <User firstName={firstName} portfolios={portfolios} />} />
            <Route path="/trade/:ticker" render={ (props) => <TradeFormContainer portfolios={portfolios} />} />
            <Route path="/trade" render={ (props) => <TradeFormContainer {...props} portfolios={portfolios} />} />
            <Route path="/portfolios/:portfolio_id/positions/:stock_id" render={ (props) => <PositionContainer {...props} />} />  
            <Route path="/portfolios/:id" render={ (props) => <PortfolioContainer {...props}/> } />
            <Route path="/" render={ (props) => <User firstName={firstName} portfolios={portfolios} />} />
          </Switch>
        </div>
      ) : (
        <div>
          <Switch>
            <Route path="/signup" render={ (props) => <NewUserFormContainer {...props} />}/>
            <Route path="/*" render={ (props) => <Home {...props} login={login}/>}/>
          </Switch>
        </div>
      )}
    </div>
  </BrowserRouter>
)

export default App;
