import { RESOURCE } from '@ftbl/resource';

export const SEND = 'ftbl/contact/contact/SEND';
export const SUCCESS = 'ftbl/contact/contact/SUCCESS';
export const FAILURE = 'ftbl/contact/contact/FAILURE';

export const initialState = {
  sending: false
, sent: false
, error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case SEND:
    return state;

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