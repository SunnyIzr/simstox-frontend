import React from 'react';
import ReactDOM from 'react-dom';
import './styles/materialize.css';
import './styles/index.css';
import { Root } from './containers/Root';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

registerServiceWorker();

