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
    let { id, portfolios } = this.props.user
    const isLoggedIn = id != null
    return (
      <div>
      { isLoggedIn ? (
        <Menu isOpen={this.state.isOpen} >
          <Link className="menu-item" to="/user" onClick={this.toggleMenu}>Home</Link>
          <div className="menu-item">Portfolios</div>
          { portfolios.map ( (portfolio, i) =>
            <Link className="menu-item sub-item" to={`/portfolios/${portfolio.id}`} onClick={this.toggleMenu} key={i}>{portfolio.name}</Link>
            )
          }
          <Link className="menu-item" to="/trade" onClick={this.toggleMenu}>Trade</Link>
        </Menu>
      ) : (
        <div>
          <Menu isOpen={this.state.isOpen} >
            <Link className="menu-item" to="/" onClick={this.toggleMenu}>Home</Link>
          </Menu>
        </div>
      )}
      </div>
    );
  }
}

export default SideNav