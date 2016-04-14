import memoize from 'lru-memoize';
import { createValidator, required, minLength, isChecked } from '@ftbl/validation';
import { alphabetic, numeric, capital, symbol } from '../../user/validate/password';

export default memoize(10)(createValidator({
  email: [ required() ]
, name: [ required() ]
, member: [ required() ]
, type: [ required() ]
, smla: [ isChecked() ]
, robot: [ isChecked() ]
, password: [ minLength(8), alphabetic(), numeric(), capital(), symbol() ]
}));
