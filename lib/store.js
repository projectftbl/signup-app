import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import queue from 'quince';
import resource from 'rictus';
import { reduxReactRouter } from 'redux-react-router';
import reducer from './reducer';

const logger = createLogger({
  predicate: (getState, action) => __DEV__
});

export default (createHistory, initialState) => {
  return compose(
    applyMiddleware(thunk, promise, queue, resource, logger)
  , reduxReactRouter({ createHistory })
  )(createStore)(reducer, initialState);
};
