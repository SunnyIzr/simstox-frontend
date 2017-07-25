import React, { Component } from 'react'
import App from './App'

export class Root extends Component {
  render(){
    return(
      <App {...this.props} />
    )
  }
}