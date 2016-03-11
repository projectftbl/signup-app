import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { SUCCESS } from '../ducks/password';

export function* password() {
  while(true) {
    yield take(SUCCESS);
    yield put(reloadSession({ forceRefresh: true }));
    yield put(reset('password'));
    yield put(info('Your password has been changed.'));
    yield put(push('/member'));
  }
};
