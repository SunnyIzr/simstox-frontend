import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/root'
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger()

let configureStore = () => {
  return createStore(
      rootReducer,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  }

export default configureStore;