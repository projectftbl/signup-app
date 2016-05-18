import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { User, Profile, Password } from './handlers';
import { Welcome } from '../../components';

export default function(Authorize) {
  return (
    <Route path='user' component={Authorize()(User)}>
      <IndexRoute component={Welcome(Profile)}/>
      <Route path='profile' component={Welcome(Profile)}/>
      <Route path='password' component={Welcome(Password)}/>
    </Route>
  );
};