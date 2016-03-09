import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Main } from './handlers';
import { SignOn } from './apps/sessions/handlers';
import sessions from './apps/sessions/routes';
import timeline from './apps/timeline/routes';
import member from './apps/member/routes';

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={SignOn}/>
    
    {sessions}
    {timeline}
    {member}

    <Route path='*' component={SignOn}/>
  </Route>  
);
