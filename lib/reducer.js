import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form';
import flash from 'frieze';
import entities from './ducks/entities';

import member from './apps/member/reducer';
import timeline from './apps/timeline/reducer';

import { default as sessions, signOnReducer as signOn } from './apps/sessions/reducer';

export default combineReducers({
  routing: routerReducer
, form: form.plugin({ signOn })
, flash
, entities
, member
, timeline
, ...sessions
});