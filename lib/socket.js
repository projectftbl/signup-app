import forOwn from 'lodash/object/forOwn';
import socketIo from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { config } from '@ftbl/support';
import { connected } from './ducks/io';

export const listen = (dispatch, socket, bindings) => {
  forOwn(bindings, (action, name) => socket.on(name, bindActionCreators(action, dispatch)));
};

export default ({ dispatch, getState }, bindings) => {
  const socket = socketIo(config('host'));

  socket.on('connect', _ => {
    const { session } = getState();

    if (session.user) socket.emit('signOn', session.user.id);

    dispatch(connected(socket));

    listen(dispatch, socket, bindings);
  });

  return socket;
};