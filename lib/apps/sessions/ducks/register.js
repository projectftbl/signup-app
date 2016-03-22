import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';

export const REGISTER = 'ftbl/sessions/register/REGISTER';
export const SUCCESS = 'ftbl/sessions/register/SUCCESS';
export const FAILED = 'ftbl/sessions/register/FAILED';

const initialState = { 
  registering: false
, registered: false
, user: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case REGISTER:
    return assign({}, state, { registering: true, registered: false });
  case SUCCESS:
    return assign({}, state, { user: action.payload.user, registering: false, registered: true });
  case FAILED:
    return assign({}, state, { user: null, registering: false, registered: false });

  default:
    return state;
  }
};

export function register(user) {
  return {
    [RESOURCE]: {
      types: [ REGISTER, SUCCESS, FAILED ]
    , payload: {
        url: '/users', method: 'post', data: { user }
      }
    }
  };
};
