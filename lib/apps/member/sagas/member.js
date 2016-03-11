import { take, put } from 'redux-saga/effects';

import { fetch, create } from '../ducks/member';

import { SUCCESS as SIGNUP } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS as SIGNON } from '../../sessions/ducks/session';

export function* signUp(getState) {
  while(true) {
    yield take(SIGNUP);

    const user = getState().register.user;

    yield put(create(user));
  }
};

export function* signOn(getState) {
  while(true) {
    yield take(SIGNON);

    const user = getState().session.user;

    yield put(fetch(user));
  }
};
