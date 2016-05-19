import React from 'react';
import { Route } from 'react-router';
import { SignUp } from './handlers';
import { Welcome } from '../../components';

export default <Route path='signup' component={Welcome(SignUp)} />;