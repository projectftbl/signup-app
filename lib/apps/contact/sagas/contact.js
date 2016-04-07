import { take, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';
import { info } from 'frieze';

import { SUCCESS } from '../ducks/contact';

export function* send() {
  while(true) {
    yield take(SUCCESS);
    yield put(reset('contact'));
    yield put(info('Your message has been sent.'));
    yield put(push('/'));
  }
};
