import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Member, Profile, Password } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='member' component={IsAuthenticated(Member)}>
      <IndexRoute component={Profile}/>
      <Route path='profile' component={Profile}/>
      <Route path='password' component={Password}/>
    </Route>
  );
};