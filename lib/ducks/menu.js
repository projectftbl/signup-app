import assign from 'lodash/object/assign';
import forOwn from 'lodash/object/forOwn';

export const TOGGLE = 'ftbl/menu/TOGGLE';

const initialState = {};

export default function reducer(state = initialState, action) {
  if (action.type === TOGGLE) {
    var menus = assign({}, state)
      , menu = menus[action.payload.menu];

    forOwn(state, function(value, key) {
      assign(menus, { [key]: false });
    });
    
    menus[action.payload.menu] = !menu;
    
    return menus;
  }

  return state;
};

export function toggle(menu) {
  return { type: TOGGLE, payload: { menu }};
};