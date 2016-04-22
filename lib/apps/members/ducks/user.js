import assign from 'lodash/object/assign';
import map from 'lodash/collection/map';
import compact from 'lodash/array/compact';
import { createSelector } from 'reselect';
import { RESOURCE } from '@ftbl/resource';
import { Schema, normalize, arrayOf } from 'normalizr';

export const schema = new Schema('users');

export const FETCH = 'ftbl/members/users/FETCH';
export const SUCCESS = 'ftbl/members/users/SUCCESS';
export const FAILED = 'ftbl/members/users/FAILED';

export const userSelector = (state, props) => {
  return state.entities.users && state.entities.users[props.member.createdBy];
};

// const initialState = {
//   fetched: false
// , fetching: false
// , error: null
// };

// export default (state = {}, action) => {
//   switch (action.type) {
//   case FETCH:
//     return assign({}, state, { fetching: true });
//   case SUCCESS:
//     return assign({}, state, { fetching: false, error: null });
//   case FAILED:
//     return assign({}, state, { fetching: false, error: 'Error' });
  
//   // case SIGN_OUT_SUCCESS:
//   //   return initialState;
  
//   default:
//     return state;
//   }
// };

export function fetch(members) {
  return {
    [RESOURCE]: {
      types: [ FETCH, SUCCESS, FAILED ]
    , payload: {
        url: `/users`
      , method: 'get'
      , query: { ids: map(members, 'createdBy') }
      , normalize: r => normalize(r.users, arrayOf(schema))
      }
    }
  };
};

// export function list(members) {
//   return (dispatch, getState) => {
//     const { accounts } = getState().members;

//     if (accounts[member.id] && accounts[member.id].data) return dispatch(toggle(member));

//     return dispatch(fetch(member));
//   }
// };

