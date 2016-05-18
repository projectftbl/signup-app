import memoize from 'lru-memoize';
import { createValidator, required, minLength, isChecked } from '@ftbl/validation';
import { validate } from '@ftbl/user-web';

export default memoize(10)(createValidator({
  email: [ required() ]
, name: [ required() ]
, member: [ required() ]
, type: [ required() ]
, smla: [ isChecked() ]
, robot: [ isChecked() ]
, password: [ minLength(8), validate.alphabetic(), validate.numeric(), validate.capital(), validate.symbol() ]
}));
