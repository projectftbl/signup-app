import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { License } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='license' component={License}/>
  );
};