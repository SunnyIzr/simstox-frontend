import React from 'react';
import '../styles/TopNav.css';
import { Link } from 'react-router-dom'

const TopNav = ({user}) => (
  <div className='top-nav'>
    <p className='logo'>simstox</p>
    { user.id != null ? (
      <p className='greeting'>
        Hi { user.first_name }
      </p>
    ) : (
      <p className='greeting'>
        <Link to='/'>Login</Link>
      </p>
    )}
  </div>
)

export default TopNav