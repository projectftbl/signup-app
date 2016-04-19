import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Page } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='p/:page' component={Page}/>
  );
};