import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import queue from 'quince';
import resource from 'rictus';
import reducer from './reducer';

const logger = createLogger({
  predicate: (getState, action) => __DEV__
});

export default (browserHistory, initialState) => {
  return compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk, promise, queue, resource, logger)
  )(createStore)(reducer, initialState);
};
