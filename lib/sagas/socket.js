import assign from 'lodash/object/assign';
import { takeLatest } from 'redux-saga';
import { take, put, select } from 'redux-saga/effects';

import { SIGN_ON_SUCCESS, RELOAD_SUCCESS, VERIFY_SUCCESS, SIGN_OUT_SUCCESS } from '../apps/sessions/ducks/session';

import { CONNECTED } from '../ducks/io';

function* signOnToSocketServer() {
  const user = yield select(state => state.session.user)
      , io = yield select(state => state.io);

  if (io.connected) return io.socket.emit('signOn', user.id);

  while(true) {
    yield take(CONNECTED);
    
    const socket = yield select(state => state.io.socket);
    socket.emit('signOn', user.id);
  }
};

function* signOutFromSocketServer() {
  const socket = yield select(state => state.io.socket);
  socket.emit('signOut');
};

export function* signedOn() {
  yield* takeLatest(SIGN_ON_SUCCESS, signOnToSocketServer);
};

export function* reloaded() {
  yield* takeLatest(RELOAD_SUCCESS, signOnToSocketServer);
};

export function* verified() {
  yield* takeLatest(VERIFY_SUCCESS, signOnToSocketServer);
};

export function* signedOut() {
  yield* takeLatest(SIGN_OUT_SUCCESS, signOutFromSocketServer);
};
