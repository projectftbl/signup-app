import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Contact } from './handlers';
import { Welcome } from '../../components';

export default function(IsAuthenticated) {
  return (
    <Route path='contact' component={Welcome(Contact)}/>
  );
};