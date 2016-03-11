import { take, put } from 'redux-saga/effects';

import { fetch } from '../ducks/member';

import { SUCCESS as SIGNUP } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS as SIGNON } from '../../sessions/ducks/session';

export function* signup(getState) {
  while(true) {
    yield take(SIGNUP);

    const user = getState().register.user;

    yield put(fetch(user));
  }
};

export function* signon() {
  while(true) {
    yield take(SIGNON);

    const user = getState().session.user;

    yield put(fetch(user));
  }
};
