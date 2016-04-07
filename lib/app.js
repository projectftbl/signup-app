import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { reloadSession } from './apps/sessions/ducks/session';
import createStore from './store';
import routes from './routes';

// require('css!normalize.css/normalize.css');

const store = createStore(browserHistory)
    , history = syncHistoryWithStore(browserHistory, store);

// store.dispatch(reloadSession());

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes(store)}
    </Router>
  </Provider>
, root);
