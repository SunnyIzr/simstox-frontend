import React from 'react';
import '../styles/TopNav.css';
import { Link } from 'react-router-dom'

const TopNav = ({userId, firstName, logout}) => (
  <div className='top-nav'>
    <p className='logo'>simstox</p>
    { firstName != null ? (
      <p className='greeting'>
        Hi { firstName }.&nbsp;
        <Link to='/' onClick={logout}>Logout</Link>
      </p>
    ) : (
      <p className='greeting'>
        <Link to='/'>Login</Link>
      </p>
    )}
  </div>
)

export default TopNav