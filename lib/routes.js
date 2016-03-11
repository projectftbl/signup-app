import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';
import { Main } from './handlers';
import { SignOn } from './apps/sessions/handlers';
import Authenticate from './support/authenticate';
import sessions from './apps/sessions/routes';
import member from './apps/member/routes';

const IsAuthenticated = Authenticate({
  sessionSelector: state => state.session.user
, passwordSelector: state => state.session.user && state.session.user.shouldChangePassword
, redirectAction: replace
});

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={SignOn}/>
    
    {sessions}
    {member(IsAuthenticated)}

    <Route path='*' component={SignOn}/>
  </Route>  
);
