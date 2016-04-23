import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Member, Select, Profile, Connect, Access, Add } from './handlers';

export default function(Authorize) {
  return (
    <Route path='member' component={Authorize()(Member)}>
      <IndexRoute component={Profile}/>
      <Route path='select' component={Select}/>
      <Route path='profile' component={Profile}/>
      <Route path='connect' component={Connect}/>
      <Route path='access' component={Access}/>
      <Route path='add' component={Add}/>
    </Route>
  );
};