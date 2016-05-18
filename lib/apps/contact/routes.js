import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { handlers } from '@ftbl/contact-web';
import { Welcome } from '../../components';

export default function(IsAuthenticated) {
  return (
    <Route path='contact' component={Welcome(handlers.Contact)}/>
  );
};