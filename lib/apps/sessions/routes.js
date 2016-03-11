import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { signOut } from './ducks/session';
import { SignOn, Forgotten, SignOut, Verify, SignUp, Register, Connect } from './handlers';

export default function(store) {
  return 
    [ 
      <Route path='signon' component={SignOn} key='signon' />
    , <Route path='forgotten' component={Forgotten} key='forgotten' /> 
    , <Route path='verify/:code' component={Verify} key='verify' /> 
    , <Route path='signup' component={SignUp} key='signup' />
    ];
};