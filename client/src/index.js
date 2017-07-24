import React from 'react';
import ReactDOM from 'react-dom';
import './styles/materialize.css';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import Api from './api.js'


// Reducers
const user = ( 
  state = {
    isFetching: false,
    data: {}
  }, 
  action 
) =>{
  switch (action.type){
    case 'REQUEST_USER':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user
})

//Configure Store
const loggerMiddleware = createLogger()

let store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )



// Actions
let fetchUser = () => {
  return dispatch => {
    dispatch({
      type: 'REQUEST_USER'
    })
    return Api.fetchUser()
      .then(body => {
        dispatch({
          type: 'RECEIVE_USER',
          data: JSON.parse(body)
        })
      })
  }
}

let shouldFetchUser = () => {
  return !!sessionStorage.token
}

export let fetchUserIfNeeded = () => {
  if (shouldFetchUser()){
    return store.dispatch(fetchUser())
  }
}




const render = () => {
  ReactDOM.render(
    <App store={store} user={store.getState().user.data} />,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()
registerServiceWorker();

