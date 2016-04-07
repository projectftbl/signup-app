import faqs from '../data';
import find from 'lodash/collection/find';

export const OPEN = 'ftbl/faq/faq/OPEN';
export const CLOSE = 'ftbl/faq/faq/CLOSE';
export const TOGGLE = 'ftbl/faq/faq/TOGGLE';

export const initialState = {
  faqs
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case OPEN:
    return state;

  case CLOSE:
    return state;

  case TOGGLE:
    return state;

  default:
    return state;   
  }
};

export function open(section, question) {
  return { type: OPEN, payload: { section, question }};
};

export function close(section, question) {
  return { type: CLOSE, payload: { section, question }};
};

export function toggle(section, question) {
  return { type: TOGGLE, payload: { section, question }};
};