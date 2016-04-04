import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { signOn } from '../ducks/session';
import { SUCCESS } from '../ducks/register';

export function* register(getState) {
  while(true) {
    const { meta } = yield take(SUCCESS);
    yield put(reset('register'));
    yield put(info('You have been successfully registered.'));
    yield put(signOn(meta.user));
  }
};
