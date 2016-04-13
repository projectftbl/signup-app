import assign from 'lodash/object/assign';
import union from 'lodash/array/union';
import without from 'lodash/array/without';
import { RESOURCE } from '@ftbl/resource';
import { entitiesSelector } from '../../../ducks/entities';
import { memberSelector } from './members';
import { Schema, normalize, arrayOf } from 'normalizr';
import config from '../../../support/config';
import dialog from '../../../support/dialog';

export const schema = new Schema('accounts');

export const FETCH = 'ftbl/member/connect/FETCH';
export const FETCH_SUCCESS = 'ftbl/member/connect/FETCH_SUCCESS';
export const FETCH_FAILED = 'ftbl/member/connect/FETCH_FAILED';

export const CONNECTING = 'ftbl/member/connect/CONNECTING';
export const CONNECT = 'ftbl/member/connect/CONNECT';
export const CONNECT_SUCCESS = 'ftbl/member/connect/CONNECT_SUCCESS';
export const CONNECT_FAILED = 'ftbl/member/connect/CONNECT_FAILED';

export const DISCONNECT = 'ftbl/member/connect/DISCONNECT';
export const DISCONNECT_SUCCESS = 'ftbl/member/connect/DISCONNECT_SUCCESS';
export const DISCONNECT_FAILED = 'ftbl/member/connect/DISCONNECT_FAILED';

const initialState = { 
  error: null
, isConnecting: false
, isDisconnecting: false
, data: []
};

const ERRORS = {
  500: 'Server error'
, 422: 'Account already in use'
};

const host = config('client');

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SUCCESS:
    return _.assign({}, state, { data: action.payload.result });

  case CONNECTING:
    return assign({}, state, { isConnecting: true });

  case CONNECT_SUCCESS:
    return assign({}, state, { isConnecting: false, data: union([ action.payload.result ], state.data) });

  case CONNECT_FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], isConnecting: false });

  case DISCONNECT:
    return assign({}, state, { isDisconnecting: true });

  case DISCONNECT_SUCCESS:
    return assign({}, state, { isDisconnecting: false, data: without(state.data, action.meta.account.id) });

  case DISCONNECT_FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], isDisconnecting: false });

  default:
    return state;
  }
};

export const accountsSelector = entitiesSelector(state => state.member.accounts, 'accounts');

export function fetch(member) {
  return {
    [RESOURCE]: {
      types: [ FETCH, FETCH_SUCCESS, FETCH_FAILED ]
    , payload: {
        url: `/members/${member.id}/accounts`
      , method: 'get'
      , normalize: r => normalize(r.accounts, arrayOf(schema))
      }
    }
  };
};

export function list(member) {
  return (dispatch, getState) => {
    const state = accountsSelector(getState());

    if (state.data.length) return;

    return dispatch(fetch(member));
  }
};

export function connect(member, network, account) {
  account.network = network;

  return {
    [RESOURCE]: {
      types: [ CONNECT, CONNECT_SUCCESS, CONNECT_FAILED ]
    , payload: {
        url: `/members/${member.id}/accounts`
      , method: 'post'
      , data: { account }
      , normalize: r => normalize(r.account, schema)
      }
    }
  };
};

export function disconnect(account) {
  return {
    [RESOURCE]: {
      types: [ DISCONNECT, DISCONNECT_SUCCESS, DISCONNECT_FAILED ]
    , payload: {
        url: `/accounts/${account.id}`
      , method: 'del'
      }
    , meta: { account }
    }
  };
};

export function connectToFacebook() {
  return (dispatch, getState) => {
    const { session: { facebook }} = getState();
  
    dispatch({ type: CONNECTING });

    facebook.login().then(
      authentication => {
        dispatch(connect(memberSelector(getState()), 'facebook', authentication));
      }
    , error => {
        dispatch({ type: CONNECT_FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function connectTo(network) {
  if (network === 'rss') return;
  if (network === 'facebook') return connectToFacebook();

  return (dispatch, getState) => {
    dispatch({ type: CONNECTING });

    dialog(`${host}/auth/${network}`).then(
      authentication => {
        dispatch(connect(memberSelector(getState()), network, authentication));
      }
    , error => {
        dispatch({ type: CONNECT_FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function connectToTwitter() {
  return connectTo('twitter');
};

export function connectToGoogle() {
  return connectTo('google');
};

export function connectRss(data) {
  return (dispatch, getState) => {
    dispatch(connect(memberSelector(getState()), 'rss', data));
  }
};
