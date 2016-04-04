export const OPEN = 'ftbl/sidebar/OPEN';
export const CLOSE = 'ftbl/sidebar/CLOSE';
export const TOGGLE = 'ftbl/sidebar/TOGGLE';

const initialState = { active: false };

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case OPEN:
      return { active: true };
    case CLOSE:
      return { active: false };
    case TOGGLE:
      return { active: !state.active };
    default:
      return state;
  }
};

export function open() {
  return { type: OPEN };
};

export function close() {
  return { type: CLOSE };
};

export function toggle() {
  return { type: TOGGLE };
};