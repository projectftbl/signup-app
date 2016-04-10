import assign from 'lodash/object/assign';
import { take, put } from 'redux-saga/effects';

import { fetch, create, memberSelector, FETCH_SUCCESS } from '../ducks/members';
import { list } from '../ducks/accounts';

import { SUCCESS as SIGNUP } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS as SIGNON } from '../../sessions/ducks/session';

export function* signUp(getState) {
  while(true) {
    const { meta } = yield take(SIGNUP);

    const user = getState().register.user;

    yield put(create(assign({}, meta, user)));
  }
};

export function* signOn(getState) {
  while(true) {
    yield take(SIGNON);

    const user = getState().session.user;

    yield put(fetch(user));
    yield take(FETCH_SUCCESS);

    const member = memberSelector(getState());

    yield put(list(member));
  }
};
