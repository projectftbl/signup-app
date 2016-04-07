import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';
import { reloadSession } from '../../sessions/ducks/session';

import { SUCCESS } from '../ducks/user';

export function* update() {
  while(true) {
    yield take(SUCCESS);
    yield put(reloadSession({ forceRefresh: true }));
    yield put(reset('user'));
    yield put(info('Your user profile has been updated.'));
  }
};
