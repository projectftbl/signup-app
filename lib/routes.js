import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';
import { Authenticate } from '@recipher/support';

import { Main, NotFound, Denied, Error } from './handlers';
import { SignUp } from '@recipher/signup-web';

import { routes as members } from '@recipher/members-web';
import { routes as session } from '@recipher/session-web';
import { routes as member } from '@recipher/member-web';
import { routes as contact } from '@recipher/contact-web';
import { routes as user } from '@recipher/user-web';
import { routes as signup } from '@recipher/signup-web';

import content from './apps/content/routes';

const IsAuthenticated = Authenticate({
  sessionSelector: state => state.session.user
, redirectAction: replace
});

export default function(store) {
  return (
    <Route path='/' component={Main}>
      <IndexRoute component={SignUp}/>
      
      {session}
      {signup}
      
      {user(IsAuthenticated)}
      {member(IsAuthenticated)}
      {members(IsAuthenticated)}
      {content(IsAuthenticated)}
      {contact(IsAuthenticated)}

      <Route path='error' component={Error}/>
      <Route path='denied' component={Denied}/>
      <Route path='*' component={NotFound}/>
    </Route>
  );
};
