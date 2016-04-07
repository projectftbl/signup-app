import _ from 'lodash';
import { RESOURCE } from '@ftbl/resource';

export const CHANGE = 'ftbl/user/password/CHANGE';
export const SUCCESS = 'ftbl/user/password/SUCCESS';
export const FAILED = 'ftbl/user/password/FAILED';

const ERRORS = {
  422: 'You have entered an invalid password'
}

const initialState = { error: null, changing: false, changed: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case CHANGE:
    return _.assign({}, state, { changing: true, changed: false });
  case SUCCESS:
    return _.assign({}, state, { error: null, changed: true, changing: false });
  case FAILED:
    return _.assign({}, state, { error: ERRORS[action.payload.status], changing: false, changed: false });
  default:
    return state;
  }
}

export function changePassword(user, data) {
  return {
    [RESOURCE]: {
      types: [ CHANGE, SUCCESS, FAILED ]
    , payload: {
        url: `/users/${user.id}/password`
      , method: 'post'
      , data: { password: data }
      }
    }
  };
}
