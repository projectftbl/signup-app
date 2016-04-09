import assign from 'lodash/object/assign';
import { RESOURCE } from '@ftbl/resource';

export const SEND = 'ftbl/contact/contact/SEND';
export const SUCCESS = 'ftbl/contact/contact/SUCCESS';
export const FAILED = 'ftbl/contact/contact/FAILED';

export const initialState = {
  sending: false
, error: null
};

const ERRORS = {
  404: 'Error sending message'
, 422: 'Error sending message'
, 500: 'Error sending message'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case SEND:
    return assign({}, state, { sending: true });

  case SUCCESS:
    return assign({}, state, { error: null, sending: false });

  case FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], sending: false });

  default:
    return state;   
  }
};

export function send(data) {
  return {
    [RESOURCE]: {
      types: [ SEND, SUCCESS, FAILED ]
    , payload: {
        url: '/messages'
      , method: 'post'
      , data: { message: data }
      }
    }
  };
};