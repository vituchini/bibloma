import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './views/App.jsx';

import 'antd/dist/antd.css';
import './scss/main.scss';
import { store } from './redux/redux';

import removeTransition from './functions/removeTransition';

removeTransition('body');
window.addEventListener('resize', () => {
  removeTransition('body');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
