import { error } from 'frieze';
import { take, put, select } from 'redux-saga/effects';

import { memberSelector, FETCH_SUCCESS, SET_PRIMARY_SUCCESS } from '../ducks/members';
import { fetch } from '../ducks/users';

export function* fetchUsersOnFetchMember() {
  while(true) {
    yield take(FETCH_SUCCESS);
    yield put(fetch(yield select(memberSelector)));
  }
};

export function* fetchUsersOnSetPrimary() {
  while(true) {
    yield take(SET_PRIMARY_SUCCESS);
    yield put(fetch(yield select(memberSelector)));
  }
};
