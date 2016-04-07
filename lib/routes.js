import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';
import { Main } from './handlers';
import { SignOn } from './apps/sessions/handlers';
import Authenticate from './support/authenticate';
import sessions from './apps/sessions/routes';
import user from './apps/user/routes';
import member from './apps/member/routes';
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
      <IndexRoute component={SignOn}/>
      
      {sessions}
      {user(IsAuthenticated)}
      {member(IsAuthenticated)}
      {faq(IsAuthenticated)}
      {content(IsAuthenticated)}
      {contact(IsAuthenticated)}

      <Route path='*' component={SignOn}/>
    </Route>
  );
};
