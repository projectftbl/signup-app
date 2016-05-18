import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { handlers } from '@ftbl/session-web';
import { Welcome } from '../../components';

export default [ 
  <Route path='signon' component={Welcome(handlers.SignOn)} key='signon' />
, <Route path='forgotten' component={Welcome(handlers.Forgotten)} key='forgotten' /> 
, <Route path='verify/:code' component={handlers.Verify} key='verify' /> 
];