import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../styles/SideNav.css';
import { Link } from 'react-router-dom'

class SideNav extends React.Component {
  constructor(){
    super()
    this.state ={
      isOpen: null
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu(){
    let isOpen = this.state.isOpen
    this.setState({isOpen: isOpen })
  }
  render () {
    return (
      <Menu isOpen={this.state.isOpen} >
        <Link className="menu-item" to="/" onClick={this.toggleMenu}>Home</Link>
        <Link className="menu-item" to="/portfolios" onClick={this.toggleMenu}>Portfolios</Link>
        <Link className="menu-item sub-item" to="/portfolio" onClick={this.toggleMenu}>Large Cap Divident</Link>
        <Link className="menu-item sub-item" to="/portfolio" onClick={this.toggleMenu}>High Yield Value</Link>
        <Link className="menu-item sub-item" to="/portfolio" onClick={this.toggleMenu}>Blue Chip Tech</Link>
        <Link className="menu-item" to="/user" onClick={this.toggleMenu}>Account</Link>
        <Link className="menu-item" to="/trade" onClick={this.toggleMenu}>Trade</Link>
      </Menu>
    );
  }
}

export default SideNav