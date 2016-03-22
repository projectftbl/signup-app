import { take, put, call } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';
import cookie from 'react-cookie';

import { SIGN_ON_SUCCESS, SIGN_OUT_SUCCESS, VERIFY_SUCCESS } from '../ducks/session';

const TOKEN = 'token'
    , options = { path: '/' };

function* saveToken(token) {
  cookie.save(TOKEN, token, options);
};

function* clearToken() {
  cookie.remove(TOKEN, options);
};

export function* signOn() {
  while(true) {
    const session = yield take(SIGN_ON_SUCCESS);
    yield call(saveToken, session.payload.session.token);
    yield put(push('/member'));
    yield put(reset('signOn'));
  }
};

export function* signOut() {
  while(true) {
    yield take(SIGN_OUT_SUCCESS);
    yield call(clearToken);
    yield put(push('/'));
    yield put(info('You have been signed out'));
  }
};

export function* verify() {
  while(true) {
    const session = yield take(VERIFY_SUCCESS);
    yield call(saveToken, session.payload.session.token);
    yield put(push('/member'));
    yield put(info('Your email has been successfully verified'));
  }
};
