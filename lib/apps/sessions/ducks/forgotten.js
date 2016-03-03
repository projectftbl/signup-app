import assign from 'lodash/object/assign';
import { RESOURCE } from 'rictus';

export const RESET = 'ftbl/users/forgetten/RESET';
export const RESET_SUCCESS = 'ftbl/users/forgetten/SUCCESS';
export const RESET_FAILED = 'ftbl/users/forgetten/FAILED';
export const RESET_CLEAR = 'ftbl/users/forgetten/CLEAR';

const initialState = { 
  resetting: false
, reset: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case RESET:
    return assign({}, state, { resetting: true, reset: false });
  case RESET_SUCCESS:
  case RESET_FAILED:
    return assign({}, state, { resetting: false, reset: true });
  case RESET_CLEAR:
    return initialState;

  default:
    return state;
  }
};

export function resetPassword(data) {
  return {
    [RESOURCE]: {
      types: [ RESET, RESET_SUCCESS, RESET_FAILED ]
    , payload: {
        url: '/users/passwords', method: 'post', data: { email: data.email }
      }
    }
  };
};

export function clear() {
  return { type: RESET_CLEAR };
};