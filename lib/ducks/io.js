export const CONNECTED = 'ftbl/io/CONNECTED';

const initialState = { socket: null, connected: false };

export default (state = initialState, action) => {
  if (action.type === CONNECTED) return { socket: action.payload.socket, connected: true };

  return state;
};

export function connected(socket) {
  return { type: CONNECTED, payload: { socket }};
};