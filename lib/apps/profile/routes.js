import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Profile, Edit, Password } from './handlers';

export default (
  <Route path='profile' component={Profile}>
    <IndexRoute component={Edit}/>
    <Route path='edit' component={Edit}/>
    <Route path='password' component={Password}/>
  </Route>
);;