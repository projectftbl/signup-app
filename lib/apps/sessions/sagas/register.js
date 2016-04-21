import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import { signOn } from '../ducks/session';
import { SUCCESS } from '../ducks/register';

export function* register() {
  while(true) {
    yield take(SUCCESS);
    // yield put(signOn(data));
    yield put(reset('register'));
  }
};
