import { take, put, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { info, warning } from 'frieze';
import { reloadSession } from '../../sessions/ducks/session';

import { SUCCESS } from '../ducks/password';

export function* password() {
  while(true) {
    yield take(SUCCESS);
    yield put(reloadSession({ forceRefresh: true, redirect: false }));
    yield put(reset('password'));
    yield put(info('Your password has been changed.'));
  }
};

export function* shouldChangePassword() {
  while(true) {
    yield take(LOCATION_CHANGE);

    if (yield select(state => state.session.user && state.session.user.shouldChangePassword === true)) {
      yield put(push('/user/password'));
    }
  }
};