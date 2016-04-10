import memoize from 'lru-memoize';
import { createValidator, required, isChecked } from 'vehicular';

export default memoize(10)(createValidator({
  email: [ required ]
, name: [ required ]
, member: [ required ]
, type: [ required ]
, smla: [ isChecked ]
, robot: [ isChecked ]
}));
