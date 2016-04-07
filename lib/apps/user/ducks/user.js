import _ from 'lodash';
import { RESOURCE } from '@ftbl/resource';

export const UPDATE = 'ftbl/user/user/UPDATE';
export const SUCCESS = 'ftbl/user/user/SUCCESS';
export const FAILED = 'ftbl/user/user/FAILED';

const ERRORS = {
  500: 'Error updating user'
};

const initialState = { 
  updating: false
, error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE:
    return _.assign({}, state, { updating: true });
  case SUCCESS:
    return _.assign({}, state, { error: null, updating: false });
  case FAILED:
    return _.assign({}, state, { error: ERRORS[action.payload.status], updating: false });
  default:
    return state;
  }
};

export function update(user, data) {
  return {
    [RESOURCE]: {
      types: [ UPDATE, SUCCESS, FAILED ]
    , payload: {
        url: `/user/${user.id}`
      , method: 'put'
      , data: { user: data }
      }
    }
  };
};
