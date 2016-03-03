import memoize from 'lru-memoize';
import { createValidator, required } from 'vehicular';

export default memoize(10)(createValidator({
  email: [ required ]
}));
