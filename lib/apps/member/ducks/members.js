import assign from 'lodash/object/assign';
import union from 'lodash/array/union';
import find from 'lodash/collection/find';
import { createSelector } from 'reselect';
import { RESOURCE } from '@ftbl/resource';
import { entitiesSelector } from '../../../ducks/entities';
import { Schema, normalize, arrayOf } from 'normalizr';

export const schema = new Schema('members');

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
  403: 'Not authorized'
, 500: 'Error fetching member'
};

const initialState = { 
  data: []
, error: null
, changing: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case FETCH:
    return assign({}, state);
  case FETCH_SUCCESS:
    return assign({}, state, { data: action.payload.result, error: null });
  
  case UPDATE:
    return assign({}, state, { error: null, changing: true });
  
  case UPDATE_SUCCESS:
  case CREATE_SUCCESS:
    return assign({}, state, { data: union([ action.payload.result ], state.data), error: null, changing: false });

  case FETCH_FAILED:
  case CREATE_FAILED:
  case UPDATE_FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], changing: false });
  default:
    return state;
  }
};

export const membersSelector = entitiesSelector(state => state.member.members, 'members');

export const memberSelector = createSelector(membersSelector, members => {
  return find(members.data, { primary: true }) || members.data[0];
});

export function fetch(user) {
  if (user == null) return;
  
  return {
    [RESOURCE]: {
      types: [ FETCH, FETCH_SUCCESS, FETCH_FAILED ]
    , payload: {
        url: `/members?userid=${user.id}`
      , method: 'get'
      , normalize: r => normalize(r.members, arrayOf(schema))
      }
    }
  };
};

export function create(data) {
  return {
    [RESOURCE]: {
      types: [ CREATE, CREATE_SUCCESS, CREATE_FAILED ]
    , payload: {
        url: '/members'
      , method: 'post'
      , data: { member: data }
      , normalize: r => normalize(r.member, schema)
      }
    }
  };
};

export function update(member, data) {
  return {
    [RESOURCE]: {
      types: [ UPDATE, UPDATE_SUCCESS, UPDATE_FAILED ]
    , payload: {
        url: `/members/${member.id}`
      , method: 'put'
      , data: { member: data }
      , normalize: r => normalize(r.member, schema)
      }
    }
  };
};
