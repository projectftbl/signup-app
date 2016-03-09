import _ from 'lodash';
import { RESOURCE } from 'rictus';

export const FETCH = 'ftbl/member/member/FETCH';
export const SUCCESS = 'ftbl/member/member/SUCCESS';
export const FAILED = 'ftbl/member/member/FAILED';

const ERRORS = {
  500: 'Error fetching member'
};

const initialState = { 
  error: null
, member: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case FETCH:
    return _.assign({}, state);
  case SUCCESS:
    return _.assign({}, state, { member: action.payload.members[0], error: null });
  case FAILED:
    return _.assign({}, state, { error: ERRORS[action.payload.status], member: null });
  default:
    return state;
  }
};

export function fetch(user) {
  return {
    [RESOURCE]: {
      types: [ FETCH, SUCCESS, FAILED ]
    , payload: {
        url: `/members?userid=${user.id}`
      , method: 'get'
      }
    }
  };
};

export function update() {

};