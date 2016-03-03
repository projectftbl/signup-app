import _ from 'lodash';
import { RESOURCE } from 'rictus';
import { entitiesSelector, entitiesReducer } from '../../../ducks/entities';
import { Schema, normalize, arrayOf } from 'normalizr';

export const schema = new Schema('posts');

export const FETCH = 'ftbl/timeline/posts/FETCH';
export const SUCCESS = 'ftbl/timeline/posts/SUCCESS';
export const FAILED = 'ftbl/timeline/posts/FAILED';

export default entitiesReducer([ FETCH, SUCCESS, FAILED ]);

export function fetch() {
  return {
    [RESOURCE]: {
      types: [ FETCH, SUCCESS, FAILED ]
    , payload: {
        url: '/timeline'
      , method: 'get'
      , normalize: r => normalize(r.posts, arrayOf(schema))
      }
    }
  };
};

export function list() {
  return (dispatch, getState) => {
    const state = getState().timeline.posts;

    if (state.data.length) return;

    return dispatch(fetch());
  }
};

export const postsSelector = entitiesSelector(state => state.timeline.posts, 'posts');
