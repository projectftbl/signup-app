import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Root } from 'redux-react-local';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { reloadSession } from './apps/sessions/ducks/session';
import createStore from './store';
import routes from './routes';

const store = createStore(browserHistory)
    , history = syncHistoryWithStore(browserHistory, store);

store.dispatch(reloadSession());

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Root>
      <Router history={history}>
        {routes(store)}
      </Router>
    </Root>
  </Provider>
, root);
