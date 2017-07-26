import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'
import configureStore from '../store/configureStore'

const store = configureStore()

export class Root extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}