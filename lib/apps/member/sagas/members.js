import assign from 'lodash/object/assign';
import { info } from 'frieze';
import { take, put } from 'redux-saga/effects';

import { fetch, create, memberSelector, FETCH_SUCCESS } from '../ducks/members';
import { list } from '../ducks/accounts';

import { SUCCESS as SIGNUP, UPDATE_SUCCESS as UPDATE } from '../../sessions/ducks/register';
import { SIGN_ON_SUCCESS as SIGNON, RELOAD_SUCCESS as RELOAD } from '../../sessions/ducks/session';

export function* update(getState) {
  while(true) {
    yield take(UPDATE);
    yield put(info('The member information has been updated.'));
  }
};

export function* signUp(getState) {
  while(true) {
    const { meta } = yield take(SIGNUP);

    const user = getState().register.user;

    yield put(create(assign({}, meta, { userId: user.id })));
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

export function* reload(getState) {
  while(true) {
    yield take(RELOAD);

    const user = getState().session.user;

    yield put(fetch(user));
    yield take(FETCH_SUCCESS);

    const member = memberSelector(getState());

    yield put(list(member));
  }
};
