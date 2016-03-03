import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-react-router';
import { reducer as form } from 'redux-form';
import flash from 'frieze';
import entities from './ducks/entities';

import profile from './apps/profile/reducer';
import timeline from './apps/timeline/reducer';

import { default as sessions, signOnReducer as signOn } from './apps/sessions/reducer';

export default combineReducers({
  router
, form: form.plugin({ signOn })
, flash
, entities
, profile
, timeline
, ...sessions
});