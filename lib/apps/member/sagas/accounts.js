import { error } from 'frieze';
import { take, put } from 'redux-saga/effects';

import { CONNECT_FAILED } from '../ducks/accounts';

export function* connect() {
  while(true) {
    const { payload } = yield take(CONNECT_FAILED);
    
    if (payload.status === 422) {
      yield put(error('That account is already connected to another member.'));
    }
  }
};
