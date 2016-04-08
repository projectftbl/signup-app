import memoize from 'lru-memoize';
import { createValidator, required, maxLength } from 'vehicular';

export default memoize(10)(createValidator({
  name: [ required ]
, email: [ required ]
, message: [ required, maxLength(1000) ]
}));
