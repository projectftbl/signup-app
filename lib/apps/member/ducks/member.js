import _ from 'lodash';
import { RESOURCE } from '@ftbl/resource';

export const FETCH = 'ftbl/member/member/FETCH';
export const FETCH_SUCCESS = 'ftbl/member/member/FETCH_SUCCESS';
export const FETCH_FAILED = 'ftbl/member/member/FETCH_FAILED';

export const CREATE = 'ftbl/member/member/CREATE';
export const CREATE_SUCCESS = 'ftbl/member/member/CREATE_SUCCESS';
export const CREATE_FAILED = 'ftbl/member/member/CREATE_FAILED';

export const UPDATE = 'ftbl/member/member/UPDATE';
export const UPDATE_SUCCESS = 'ftbl/member/member/UPDATE_SUCCESS';
export const UPDATE_FAILED = 'ftbl/member/member/UPDATE_FAILED';

const ERRORS = {
  500: 'Error fetching member'
};

const initialState = { 
  error: null
, data: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case FETCH:
    return _.assign({}, state);
  case FETCH_SUCCESS:
    return _.assign({}, state, { data: action.payload.members[0], error: null });
  case UPDATE_SUCCESS:
  case CREATE_SUCCESS:
    return _.assign({}, state, { data: action.payload.member, error: null });
  case FETCH_FAILED:
  case CREATE_FAILED:
  case UPDATE_FAILED:
    return _.assign({}, state, { error: ERRORS[action.payload.status], member: null });
  default:
    return state;
  }
};

export function fetch(user) {
  return {
    [RESOURCE]: {
      types: [ FETCH, FETCH_SUCCESS, FETCH_FAILED ]
    , payload: {
        url: `/members?userid=${user.id}`
      , method: 'get'
      }
    }
  };
};

export function create(user) {
  return {
    [RESOURCE]: {
      types: [ CREATE, CREATE_SUCCESS, CREATE_FAILED ]
    , payload: {
        url: '/members'
      , method: 'post'
      , data: { member: { userId: user.id }}
      }
    }
  };
};

export function update(id, member) {console.log(id, member)
  return {
    [RESOURCE]: {
      types: [ UPDATE, UPDATE_SUCCESS, UPDATE_FAILED ]
    , payload: {
        url: `/members/${id}`
      , method: 'put'
      , data: { member }
      }
    }
  };
};
