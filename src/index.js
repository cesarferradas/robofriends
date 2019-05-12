import 'tachyons';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, fetchRobots } from './reducers';

import './index.css';


const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, fetchRobots })
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.register();
