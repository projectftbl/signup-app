import Authorizer from '@ftbl/authorize';

export default (user, required, replace) => {
  if (required == null) return false;

  const claims = Authorizer.fromUser(user)
      , authorizer = new Authorizer(claims);

  if (authorizer.can(required) === false) {
    replace('/denied');
    return true;
  }
};