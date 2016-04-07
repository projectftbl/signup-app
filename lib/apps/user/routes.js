import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { User, Profile, Password } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='user' component={IsAuthenticated(User)}>
      <IndexRoute component={Profile}/>
      <Route path='profile' component={Profile}/>
      <Route path='password' component={Password}/>
    </Route>
  );
};