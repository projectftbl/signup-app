import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { ReduxRouter, replaceState } from 'redux-react-router';
import { reloadSession } from './apps/sessions/ducks/session';
import createStore from './store';
import routes from './routes';

const store = createStore(createHistory);

store.dispatch(reloadSession());

const root = document.getElementById('app');

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ReduxRouter>{routes}</ReduxRouter>
    </Provider>
  </div>
, root);
