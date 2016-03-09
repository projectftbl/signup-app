import _ from 'lodash';
import Facebook from 'facia';
import { RESOURCE } from 'rictus';
import config from '../../../support/config';

export const CONNECTING = 'ftbl/profile/connect/CONNECTING';
export const CONNECT = 'ftbl/profile/connect/CONNECT';
export const SUCCESS = 'ftbl/profile/connect/SUCCESS';
export const FAILED = 'ftbl/profile/connect/FAILED';

const initialState = { 
  error: null
, isConnecting: false
, facebook: new Facebook({ appId: config('facebook').ID, version: 'v2.5' })
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

export function connect(member, authentication) {
  return {
    [RESOURCE]: {
      types: [ CONNECT, SUCCESS, FAILED ]
    , payload: {
        url: `/members/${member.id}/accounts`
      , method: 'post'
      , data: { authentication }
      }
    }
  };
}

export function connectToFacebook(member) {
  return (dispatch, getState) => {
    const { session: { facebook }} = getState();
  
    dispatch({ type: CONNECTING });

    facebook.login().then(
      authentication => {
        authentication.provider = 'facebook';
        dispatch(connect(member, authentication));
      }
    , error => {
        dispatch({ type: FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function connectToTwitter(member) {
  return (dispatch, getState) => {
    dispatch({ type: CONNECTING });

    dialog('/auth/twitter').then(
      authentication => {
        authentication.provider = 'twitter';
        dispatch(connect(member, authentication));
      }
    , error => {
        dispatch({ type: FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};