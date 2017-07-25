import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../styles/SideNav.css';
import { Link } from 'react-router-dom'

const SideNav = ({
  isLoggedIn,
  isOpen,
  toggleMenu,
  portfolios
}) => (
  <div>
  { isLoggedIn ? (
    <Menu isOpen={isOpen} >
      <Link className="menu-item" to="/user" onClick={toggleMenu}>Home</Link>
      <div className="menu-item">Portfolios</div>
      { portfolios.map ( (portfolio, i) =>
        <Link className="menu-item sub-item" to={`/portfolios/${portfolio.id}`} onClick={toggleMenu} key={i}>{portfolio.name}</Link>
        )
      }
      <Link className="menu-item" to="/trade" onClick={toggleMenu}>Trade</Link>
    </Menu>
  ) : (
    <div>
      <Menu isOpen={isOpen} >
        <Link className="menu-item" to="/" onClick={toggleMenu}>Home</Link>
      </Menu>
    </div>
  )}
  </div>
)

export default SideNav