import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form';
import flash from 'frieze';
import entities from './ducks/entities';
import sidebar from './ducks/sidebar';

import user from './apps/user/reducer';
import member from './apps/member/reducer';
import contact from './apps/contact/reducer';
import faq from './apps/faq/reducer';

import { default as sessions, signOnReducer as signon } from './apps/sessions/reducer';

export default combineReducers({
  routing: routerReducer
, form: form.plugin({ signon })
, flash
, entities
, sidebar

, ...sessions

, user
, member
, faq
, contact
});