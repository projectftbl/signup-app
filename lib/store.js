import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import queue from 'quince';
import resource from '@ftbl/resource';

import reducer from './reducer';
import sagas from './sagas';

const logger = createLogger({
  predicate: (getState, action) => false //__DEV__
});

export default (browserHistory, initialState) => {
  var store = compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk, promise, queue, resource, sagas, logger)
  )(createStore)(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      var nextRootReducer = require('./reducer');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
