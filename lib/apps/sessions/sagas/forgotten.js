import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { SUCCESS, clear } from '../ducks/forgotten';

export function* forgotten() {
  while(true) {
    yield take(SUCCESS);
    yield reset('forgotten');
    yield put(clear());
    yield put(info('Your password has been reset. Please check your inbox.'));
    yield put(push('/signon'));
  }
};
