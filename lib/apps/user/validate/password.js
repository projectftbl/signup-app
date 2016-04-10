import memoize from 'lru-memoize';
import { createValidator, required, minLength, shouldMatch } from '@ftbl/validation';

export default memoize(10)(createValidator({
  password: [ required(), minLength(8) ]
, confirm: [ required(), minLength(8), shouldMatch('password') ]
}));
