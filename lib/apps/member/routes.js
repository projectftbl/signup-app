import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Member, Select, Profile, Connect, Access, Manage, User, Add } from './handlers';
import { Welcome } from '../../components';

export default function(Authorize) {
  return (
    <Route path='member' component={Authorize()(Member)}>
      <IndexRoute component={Welcome(Profile)} />
      <Route path='select' component={Welcome(Select)} />
      <Route path='profile' component={Welcome(Profile)} />
      <Route path='connect' component={Welcome(Connect)} />
      <Route path='access' component={Welcome(Access)}>
        <IndexRoute component={Manage} />
        <Route path='manage' component={Manage} />
        <Route path='add' component={User} />
      </Route>
      <Route path='add' component={Welcome(Add)} />
    </Route>
  );
};