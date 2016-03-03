import _ from 'lodash';
import { RESOURCE } from 'rictus';

export const UPDATE = 'ftbl/profile/profile/UPDATE';
export const SUCCESS = 'ftbl/profile/profile/SUCCESS';
export const FAILED = 'ftbl/profile/profile/FAILED';

const initialState = { error: null, changing: false, changed: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE:
    return _.assign({}, state, { changing: true, changed: false });
  case SUCCESS:
    return _.assign({}, state, { error: null, changed: true, changing: false });
  case FAILED:
    return _.assign({}, state, { error: action.payload.statusText, changing: false, changed: false });
  default:
    return state;
  }
}

export function update(user, data) {
  return {
    [RESOURCE]: {
      types: [ UPDATE, SUCCESS, FAILED ]
    , payload: {
        url: `/users/${user.id}`
      , method: 'put'
      , data: { user: data }
      }
    }
  };
}
