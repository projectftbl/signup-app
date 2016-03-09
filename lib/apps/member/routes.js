import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Member, Profile, Password, Connect } from './handlers';

export default (
  <Route path='member' component={Member}>
    <IndexRoute component={Profile}/>
    <Route path='profile' component={Profile}/>
    <Route path='password' component={Password}/>
    <Route path='connect' component={Connect}/>
  </Route>
);