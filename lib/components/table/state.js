import assign from 'lodash/object/assign';
import { local } from 'redux-react-local';

export const Events = ({ dispatch, $, id }) => {
  return {
    over: _ => dispatch($({ id, type: 'over' }))
  , out:  _ => dispatch($({ id, type: 'out' }))
  }
};

export default ident => local({
  ident
, initial: {}
, reducer(state, { id, me, meta }) { 
    return me ? assign({}, state, { [id]: meta.type === 'over' }) : state;
  }
});

//.replace(/([a-z\d])([A-Z]+)/g, '$1 $2')