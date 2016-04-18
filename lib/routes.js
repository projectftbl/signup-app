import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';

import Authenticate from './support/authenticate';

import { Main, NotFound, Denied, Error } from './handlers';
import { SignOn, Register } from './apps/sessions/handlers';

import sessions from './apps/sessions/routes';
import user from './apps/user/routes';
import member from './apps/member/routes';
import members from './apps/members/routes';
import faq from './apps/faq/routes';
import content from './apps/content/routes';
import contact from './apps/contact/routes';

const IsAuthenticated = Authenticate({
  sessionSelector: state => state.session.user
, passwordSelector: state => state.session.user && state.session.user.shouldChangePassword === false
, redirectAction: replace
});

export default function(store) {
  return (
    <Route path='/' component={Main}>
      <IndexRoute component={Register}/>
      
      {sessions}
      {user(IsAuthenticated)}
      {member(IsAuthenticated)}
      {members(IsAuthenticated)}
      {faq(IsAuthenticated)}
      {content(IsAuthenticated)}
      {contact(IsAuthenticated)}

      <Route path='error' component={Error}/>
      <Route path='denied' component={Denied}/>
      <Route path='*' component={NotFound}/>
    </Route>
  );
};
