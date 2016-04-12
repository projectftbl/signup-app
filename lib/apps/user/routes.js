import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { User, Profile, Password } from './handlers';

export default function(Authenticate) {
  return (
    <Route path='user' component={Authenticate(User)}>
      <IndexRoute component={Profile}/>
      <Route path='profile' component={Profile}/>
      <Route path='password' component={Password}/>
    </Route>
  );
};