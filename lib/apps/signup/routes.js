import React from 'react';
import { Route } from 'react-router';
import { Signup } from './handlers';
import { Welcome } from '../../components';

export default <Route path='signup' component={Welcome(Signup)} />;