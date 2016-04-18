import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';
import { entitiesSelector, entitiesReducer } from '../../../ducks/entities';
import { Schema, normalize, arrayOf } from 'normalizr';

export const schema = new Schema('members');

export const SEARCH = 'ftbl/members/members/FETCH';
export const SUCCESS = 'ftbl/members/members/SUCCESS';
export const FAILED = 'ftbl/members/members/FAILED';

export default entitiesReducer([ SEARCH, SUCCESS, FAILED ]);

export const membersSelector = entitiesSelector(state => state.members.members, 'members');

export function search(data) {
  const { q = '' } = data;
  
  return {
    [RESOURCE]: {
      types: [ SEARCH, SUCCESS, FAILED ]
    , payload: {
        url: '/members/search'
      , method: 'get'
      , query: { q }
      , normalize: r => normalize(r.members, arrayOf(schema))
      }
    , meta: { query: data.q }
    }
  };
};

