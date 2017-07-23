import React from 'react';
import '../styles/TopNav.css';
import { Link } from 'react-router-dom'

const TopNav = ({user, logout}) => (
  <div className='top-nav'>
    <p className='logo'>simstox</p>
    { user.id != null ? (
      <p className='greeting'>
        Hi { user.first_name }.&nbsp;
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