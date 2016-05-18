import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';
import { Authenticate } from '@ftbl/support';

import { Main, NotFound, Denied, Error } from './handlers';
import { Signup } from './apps/signup/handlers';

import { routes as faq } from '@ftbl/faq-web';

import session from './apps/session/routes';
import contact from './apps/contact/routes';
import user from './apps/user/routes';

import signup from './apps/signup/routes';
import member from './apps/member/routes';
import members from './apps/members/routes';
import content from './apps/content/routes';

const IsAuthenticated = Authenticate({
  sessionSelector: state => state.session.user
, redirectAction: replace
});

export default function(store) {
  return (
    <Route path='/' component={Main}>
      <IndexRoute component={Signup}/>
      
      {session}
      {signup}
      
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
