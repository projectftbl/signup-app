import assign from 'lodash/object/assign';
import { info } from 'frieze';
import { takeLatest } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

import { fetch, create, memberSelector, FETCH_SUCCESS, UPDATE_SUCCESS } from '../ducks/members';
import { list } from '../ducks/accounts';

import { SUCCESS as SIGNUP_SUCCESS } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS, RELOAD_SUCCESS, VERIFY_SUCCESS } from '../../sessions/ducks/session';

function* loadMember(getState) {
  const user = getState().session.user;

  yield put(fetch(user));
  yield take(FETCH_SUCCESS);

  const member = memberSelector(getState());

  yield put(list(member));
};

export function* update(getState) {
  while(true) {
    yield take(UPDATE_SUCCESS);
    yield put(info('The member information has been updated.'));
  }
};

export function* signUp(getState) {
  while(true) {
    const { meta: { data }} = yield take(SIGNUP_SUCCESS);

    const user = getState().register.user;

    yield put(create(assign({}, data, { userId: user.id })));
  }
};

export function* signOn(getState) {
  yield* takeLatest(SIGN_ON_SUCCESS, loadMember, getState);
};

export function* reload(getState) {
  yield* takeLatest(RELOAD_SUCCESS, loadMember, getState);
};

export function* verified(getState) {
  yield* takeLatest(VERIFY_SUCCESS, loadMember, getState);
};
