import { takeLatest } from 'redux-saga';
import { take, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SUCCESS } from '../ducks/members';

export function* search() {
  while(true) {
    yield take(SUCCESS);  
    yield put(push('/members')); 
  }
};
