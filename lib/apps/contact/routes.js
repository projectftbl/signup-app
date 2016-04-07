import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Contact } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='contact' component={Contact}/>
  );
};