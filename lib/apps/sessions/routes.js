import React from 'react';
import { Route } from 'react-router';
import { SignOn, Forgotten, SignOut, Verify, Register } from './handlers';

export default (
  [ 
    <Route path='signon' component={SignOn} key='signon' />
  , <Route path='signout' component={SignOut} key='signout' /> 
  , <Route path='forgotten' component={Forgotten} key='forgotten' /> 
  , <Route path='verify/:code' component={Verify} key='verify' /> 
  , <Route path='register' component={Register} key='register' /> 
  ]
);