import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';

export const REGISTER = 'ftbl/sessions/register/REGISTER';
export const SUCCESS = 'ftbl/sessions/register/SUCCESS';
export const FAILED = 'ftbl/sessions/register/FAILED';

const initialState = { 
  registering: false
, user: null
, data: null
, error: null
};


const ERRORS = {
  422: 'Validation error'
, 500: 'Server error'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case REGISTER:
    return assign({}, state, { registering: true, error: null, user: null, data: null });
  case SUCCESS:
    return assign({}, state, { user: action.payload.user, data: action.meta.data, registering: false });
  case FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], user: null, data: null, registering: false });

  default:
    return state;
  }
};

export function register(data) {
  data.confirm = data.password;

  return {
    [RESOURCE]: {
      types: [ REGISTER, SUCCESS, FAILED ]
    , payload: {
        url: '/users', method: 'post', data: { user: data }
      }
    , meta: { data }
    }
  };
};
