import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from 'redux-react-local';
import { Router, browserHistory } from 'react-router';
import { reloadSession } from './apps/sessions/ducks/session';
import createStore from './store';
import routes from './routes';
import connectToSocketServer from './socket';
import subscriptions from './subscriptions';

const { store, history } = createStore(browserHistory)
    , socket = connectToSocketServer(store, subscriptions)
    , root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Root>
      <Router history={history}>
        {routes(store)}
      </Router>
    </Root>
  </Provider>
, root);

store.dispatch(reloadSession({ forceRefresh: true, redirect: true }));
