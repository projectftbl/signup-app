import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';

export const RESET = 'ftbl/sessions/forgotten/RESET';
export const SUCCESS = 'ftbl/sessions/forgotten/SUCCESS';
export const FAILED = 'ftbl/sessions/forgotten/FAILED';
export const CLEAR = 'ftbl/sessions/forgotten/CLEAR';

const initialState = { 
  resetting: false
, reset: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case RESET:
    return assign({}, state, { resetting: true, reset: false });
  case SUCCESS:
  case FAILED:
    return assign({}, state, { resetting: false, reset: true });
  case CLEAR:
    return initialState;

  default:
    return state;
  }
};

export function resetPassword(data) {
  return {
    [RESOURCE]: {
      types: [ RESET, SUCCESS, FAILED ]
    , payload: {
        url: '/users/passwords', method: 'post', data: { email: data.email }
      }
    }
  };
};

export function clear() {
  return { type: CLEAR };
};