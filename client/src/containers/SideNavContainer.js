import React from 'react';
import SideNav from '../components/SideNav'

class SideNavContainer extends React.Component {
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
    const isOpen = this.state.isOpen
    const isLoggedIn = id != null
    return (
      <SideNav
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
        toggleMenu={this.toggleMenu}
        portfolios={portfolios}
      />
    );
  }
}

export default SideNavContainer;