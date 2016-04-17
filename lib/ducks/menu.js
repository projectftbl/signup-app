import assign from 'lodash/object/assign';
import forOwn from 'lodash/object/forOwn';

export const OPEN = 'ftbl/menu/OPEN';
export const CLOSE = 'ftbl/menu/CLOSE';
export const TOGGLE = 'ftbl/menu/TOGGLE';

const initialState = {};

export default function reducer(state = initialState, action) {

  if (action.type === TOGGLE || action.type === OPEN || action.type === CLOSE) {
    var menus = assign({}, state)
      , menu = menus[action.payload.menu];

    forOwn(state, function(value, key) {
      assign(menus, { [key]: false });
    });
    
    switch(action.type) {
    case OPEN:
      menus[action.payload.menu] = true;
    case CLOSE:
      menus[action.payload.menu] = false;
    case TOGGLE:
      menus[action.payload.menu] = !menu;
    }
    
    return menus;
  }

  return state;
};

export function open(menu) {
  return { type: OPEN, payload: { menu }};
};

export function close(menu) {
  return { type: CLOSE, payload: { menu }};
};

export function toggle(menu) {
  return { type: TOGGLE, payload: { menu }};
};