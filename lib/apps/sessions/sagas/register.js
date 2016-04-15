import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { signOn } from '../ducks/session';
import { SUCCESS } from '../ducks/register';

export function* register() {
  while(true) {
    const { meta: { data }} = yield take(SUCCESS);
    yield put(signOn(data));
    yield put(reset('register'));
    yield put(info('You have been successfully registered.'));
  }
};
