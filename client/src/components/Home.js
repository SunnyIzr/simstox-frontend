import React, { Component } from 'react';
import '../styles/Home.css'
import LoginForm from './LoginForm'

const Home = ({ login }) => (
  <div>
    <h2 className='home-message'> Welcome to the simstox </h2>
    <div className="row">
      <LoginForm login={login}/>
    </div>
  </div>
)

export default Home;