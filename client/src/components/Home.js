import React from 'react';
import '../styles/Home.css'
import LoginFormContainer from '../containers/LoginFormContainer'

const Home = ({ login }) => (
  <div>
    <h2 className='home-message'> Welcome to the simstox </h2>
    <div className="row">
      <LoginFormContainer login={login}/>
    </div>
  </div>
)

export default Home;