import assign from 'lodash/object/assign';
import { RESOURCE } from 'rictus';

export const REGISTER = 'ftbl/users/register/REGISTER';
export const REGISTER_SUCCESS = 'ftbl/users/register/SUCCESS';
export const REGISTER_FAILED = 'ftbl/users/register/FAILED';

const initialState = { 
  registering: false
, registered: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case REGISTER:
    return assign({}, state, { registering: true, registered: false });
  case REGISTER_SUCCESS:
    return assign({}, state, { registering: false, registered: true });
  case REGISTER_FAILED:
    return assign({}, state, { registering: false, registered: false });

  default:
    return state;
  }
};

export function register(user) {
  return {
    [RESOURCE]: {
      types: [ REGISTER, REGISTER_SUCCESS, REGISTER_FAILED ]
    , payload: {
        url: '/users', method: 'post', data: { user }
      }
    }
  };
};
