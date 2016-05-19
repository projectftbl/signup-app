import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { handlers } from '@ftbl/member-web';
import { Welcome } from '../../components';

export default function(Authorize) {
  return (
    <Route path='member' component={Authorize()(handlers.Member)}>
      <IndexRoute component={Welcome(handlers.Profile)} />
      <Route path='select' component={Welcome(handlers.Select)} />
      <Route path='profile' component={Welcome(handlers.Profile)} />
      <Route path='connect' component={Welcome(handlers.Connect)} />
      <Route path='access' component={Welcome(handlers.Access)}>
        <IndexRoute component={handlers.Manage} />
        <Route path='manage' component={handlers.Manage} />
        <Route path='add' component={handlers.User} />
      </Route>
      <Route path='add' component={Welcome(handlers.Add)} />
    </Route>
  );
};