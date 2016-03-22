import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';
import config from '../../../support/config';
import dialog from '../../../support/dialog';

export const CONNECTING = 'ftbl/sessions/connect/CONNECTING';
export const CONNECT = 'ftbl/sessions/connect/CONNECT';
export const SUCCESS = 'ftbl/sessions/connect/SUCCESS';
export const FAILED = 'ftbl/sessions/connect/FAILED';

const initialState = { 
  error: null
, isConnecting: false
};

const ERRORS = {
  400: 'Server error'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case CONNECTING:
    return assign({}, state, { isConnecting: true });

  case CONNECT:
    return assign({}, state, { isConnecting: false });

  case SUCCESS:
    return assign({}, state, { isConnecting: false });

  case FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], isConnecting: false });

  default:
    return state;
  }
};

export function finish() {
};

export function connect(member, network, account) {
  account.network = network;

  return {
    [RESOURCE]: {
      types: [ CONNECT, SUCCESS, FAILED ]
    , payload: {
        url: `/members/${member.id}/accounts`
      , method: 'post'
      , data: { account }
      }
    }
  };
};

export function connectToFacebook() {
  return (dispatch, getState) => {
    const { session: { facebook }} = getState();
  
    dispatch({ type: CONNECTING });

    facebook.login().then(
      authentication => {
        dispatch(connect(getState().member.member.member, 'facebook', authentication));
      }
    , error => {
        dispatch({ type: FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function connectToTwitter() {
  return (dispatch, getState) => {
    dispatch({ type: CONNECTING });

    dialog('/auth/twitter').then(
      authentication => {
        dispatch(connect(getState().member.member.member, 'twitter', authentication));
      }
    , error => {
        dispatch({ type: FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};