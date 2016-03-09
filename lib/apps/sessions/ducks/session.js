import assign from 'lodash/object/assign';
import Facebook from 'facia';
import { RESOURCE } from 'rictus';
import config from '../../../support/config'
import dialog from '../../../support/dialog';

export const RELOAD = 'ftbl/users/sessions/RELOAD';
export const RELOAD_SUCCESS = 'ftbl/users/sessions/RELOAD_SUCCESS';
export const RELOAD_FAILED = 'ftbl/users/sessions/RELOAD_FAILED';
export const SIGN_ON = 'ftbl/users/sessions/SIGN_ON';
export const SIGN_ON_SUCCESS = 'ftbl/users/sessions/SIGN_ON_SUCCESS';
export const SIGN_ON_FAILED = 'ftbl/users/sessions/SIGN_ON_FAILED';
export const SIGN_OUT = 'ftbl/users/sessions/SIGN_OUT';
export const SIGN_OUT_SUCCESS = 'ftbl/users/sessions/SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILED = 'ftbl/users/sessions/SIGN_OUT_FAILED';
export const VERIFY = 'ftbl/users/sessions/VERIFY';
export const VERIFY_SUCCESS = 'ftbl/users/sessions/VERIFY_SUCCESS';
export const VERIFY_FAILED = 'ftbl/users/sessions/VERIFY_FAILED';

const initialState = { 
  user: null
, error: null
, isSigningOn: false
, isSigningOut: false
, facebook: new Facebook({ appId: config('facebook').ID, version: 'v2.5' })
};

const ERRORS = {
  400: 'Server error'
, 404: 'Invalid credentials'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case VERIFY:
  case SIGN_ON:
  case RELOAD:
    return assign({}, state, { user: state.user, isSigningOn: true });

  case SIGN_OUT:
    return assign({}, state, { user: state.user, isSigningOut: true });

  case SIGN_ON_SUCCESS:
  case VERIFY_SUCCESS:
  case RELOAD_SUCCESS:
    return assign({}, state, { user: action.payload.session, isSigningOn: false });

  case SIGN_ON_FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], isSigningOn: false })

  case SIGN_OUT_SUCCESS:
  case SIGN_OUT_FAILED:
  case VERIFY_FAILED:
    return assign({}, state, { user: null, error: null, isSigningOn: false, isSigningOut: false });

  default:
    return state;
  }
};

export function signOnReducer(state, action) {
  switch(action.type) {
  case SIGN_ON_FAILED:
    return { ...state, password: {}};
  default:
    return state;
  }
};

export function reloadSession(options = { forceRefresh: false }) {
  return {
    [RESOURCE]: {
      types: [ RELOAD, RELOAD_SUCCESS, RELOAD_FAILED ]
    , payload: {
        url: '/sessions', method: options.forceRefresh ? 'put' : 'get'
      }
    }
  };  
};

export function signOn(authentication) {
  return {
    [RESOURCE]: {
      types: [ SIGN_ON, SIGN_ON_SUCCESS, SIGN_ON_FAILED ]
    , payload: {
        url: '/sessions', method: 'post', data: { authentication: authentication }
      }
    }
  };
};

export function signOut(id) {
  return {
    [RESOURCE]: {
      types: [ SIGN_OUT, SIGN_OUT_SUCCESS, SIGN_OUT_FAILED ]
    , payload: {
        url: `/sessions/${id}`, method: 'del'
      }
    }
  };
};

export function signOnToFacebook() {
  return (dispatch, getState) => {
    const { session: { facebook }} = getState();
  
    dispatch({ type: SIGN_ON });

    facebook.login().then(
      authentication => {
        authentication.provider = 'facebook';
        dispatch(signOn(authentication));
      }
    , error => {
        dispatch({ type: SIGN_ON_FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function signOnToTwitter() {
  return (dispatch, getState) => {
    dispatch({ type: SIGN_ON });

    dialog('/auth/twitter').then(
      authentication => {
        authentication.provider = 'twitter';
        dispatch(signOn(authentication));
      }
    , error => {
        dispatch({ type: SIGN_ON_FAILED, payload: { statusText: '', status: 400 }});
      });
  };
};

export function verify(code) {
  return {
    [RESOURCE]: {
      types: [ VERIFY, VERIFY_SUCCESS, VERIFY_FAILED ]
    , payload: {
        url: '/sessions'
      , method: 'post'
      , data: { authentication: { provider: 'verify', verificationCode: code }}
      }
    }
  };  
};