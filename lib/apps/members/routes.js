import React from 'react';
import { Route } from 'react-router';
import { Members } from './handlers';

export default function(Authenticate) {
  return (
    <Route path='members' component={Authenticate(Members)}>
    </Route>
  );
};