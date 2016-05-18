import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { handlers } from '@ftbl/user-web';
import { Welcome } from '../../components';

export default function(Authorize) {
  return (
    <Route path='user' component={Authorize()(handlers.User)}>
      <IndexRoute component={Welcome(handlers.Profile)}/>
      <Route path='profile' component={Welcome(handlers.Profile)}/>
      <Route path='password' component={Welcome(handlers.Password)}/>
    </Route>
  );
};