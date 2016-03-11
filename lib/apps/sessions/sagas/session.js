import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { SIGN_ON_SUCCESS, SIGN_OUT_SUCCESS, VERIFY_SUCCESS } from '../ducks/session';

export function* session() {
  while(true) {
    yield take(SIGN_ON_SUCCESS);
    yield put(push('/member'));
    yield put(reset('signOn'));

    yield take(SIGN_OUT_SUCCESS);
    yield put(push('/'));
    yield put(info('You have been signed out'));
  }
};

export function* verify() {
  while(true) {
    yield take(VERIFY_SUCCESS);
    yield put(push('/member'));
    yield put(info('Your email has been successfully verified'));
  }
};
