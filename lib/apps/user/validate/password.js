import memoize from 'lru-memoize';
import { createValidator, required, minLength, shouldMatch } from '@ftbl/validation';

const isEmpty = value => value === undefined || value === null || value === '';

export function alphabetic(message = 'Needs any alphabetic character') {
  return value => {
    if (!isEmpty(value) && value.match(/[a-z]/i) == null) {
      return message;
    }
  };
};

export function numeric(message = 'Needs any numeric character') {
  return value => {
    if (!isEmpty(value) && value.match(/[0-9]/) == null) {
      return message;
    }
  };
};

export function capital(message = 'Needs a capital letter') {
  return value => {
    if (!isEmpty(value) && value.match(/[A-Z]/) == null) {
      return message;
    }
  };
};

export function symbol(message = 'Needs a symbol') {
  return value => {
    if (!isEmpty(value) && value.match(/[*@^£$!%&?+-=]/) == null) {
      return message;
    }
  };
};

export default memoize(10)(createValidator({
  password: [ required(), minLength(8), alphabetic(), numeric(), capital(), symbol() ]
, confirm: [ required(), shouldMatch('password') ]
}));

