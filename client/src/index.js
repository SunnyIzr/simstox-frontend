import React from 'react';
import ReactDOM from 'react-dom';
import './styles/materialize.css';
import './styles/index.css';
import { Root } from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'


export const store = configureStore()

const render = () => {
  ReactDOM.render(
    <Root store={store} user={store.getState().user.data} />,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()
registerServiceWorker();

