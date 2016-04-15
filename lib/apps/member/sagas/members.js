import assign from 'lodash/object/assign';
import { info } from 'frieze';
import { takeLatest } from 'redux-saga';
import { take, put, select } from 'redux-saga/effects';

import { fetch, create, memberSelector, FETCH_SUCCESS, UPDATE_SUCCESS } from '../ducks/members';
import { list } from '../ducks/accounts';

import { SUCCESS as SIGNUP_SUCCESS } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS, RELOAD_SUCCESS, VERIFY_SUCCESS } from '../../sessions/ducks/session';

function* loadMember(getState) {
  const user = yield select(state => state.session.user);

  yield put(fetch(user));
  yield take(FETCH_SUCCESS);

  const member = yield select(memberSelector);

  yield put(list(member));
};

export function* update() {
  while(true) {
    yield take(UPDATE_SUCCESS);
    yield put(info('The member information has been updated.'));
  }
};

export function* signUp() {
  while(true) {
    const { meta: { data }} = yield take(SIGNUP_SUCCESS);

    const user = yield select(state => state.register.user);

    yield put(create(assign({}, data, { userId: user.id })));
  }
};

export function* signOn() {
  yield* takeLatest(SIGN_ON_SUCCESS, loadMember);
};

export function* reload() {
  yield* takeLatest(RELOAD_SUCCESS, loadMember);
};

export function* verified() {
  yield* takeLatest(VERIFY_SUCCESS, loadMember);
};
