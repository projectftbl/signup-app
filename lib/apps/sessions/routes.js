import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { SignOn, Forgotten, SignOut, Verify, Signup, Register, Connect } from './handlers';

export default 
  [ 
    <Route path='signon' component={SignOn} key='signon' />
  , <Route path='signout' component={SignOut} key='signout' /> 
  , <Route path='forgotten' component={Forgotten} key='forgotten' /> 
  , <Route path='verify/:code' component={Verify} key='verify' /> 
  , <Route path='signup' component={Signup} key='signup'>
      <IndexRoute component={Register} /> 
      <Route path='register' component={Register} /> 
      <Route path='connect' component={Connect}  /> 
    </Route> 
  ]
;