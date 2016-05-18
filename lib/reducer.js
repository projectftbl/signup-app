import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form';
import { reducer as local } from 'redux-react-local';
import { reducer as menu } from '@ftbl/navigation';
import { reducer as io } from '@ftbl/io';
import { reducer as session, signOnReducer as signon } from '@ftbl/session-web';
import { reducer as user } from '@ftbl/user-web';
import { reducer as contact } from '@ftbl/contact-web';

import entities from '@ftbl/entities';
import flash from 'frieze';

import member from './apps/member/reducer';
import members from './apps/members/reducer';
import faq from './apps/faq/reducer';
import signup from './apps/signup/reducer';

export default combineReducers({
  routing: routerReducer
, form: form.plugin({ signon })
, local
, flash
, entities
, menu
, io

, ...session

, signup
, user
, member
, members
, faq
, contact
});