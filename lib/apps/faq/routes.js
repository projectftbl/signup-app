import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Faq } from './handlers';

export default function(IsAuthenticated) {
  return (
    <Route path='faq' component={Faq}/>
  );
};