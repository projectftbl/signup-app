import createSagaMiddleware from 'redux-saga';
import sessions from './apps/sessions/sagas';
import member from './apps/member/sagas';
import user from './apps/user/sagas';
import contact from './apps/contact/sagas';

export default createSagaMiddleware(...sessions, ...member, ...user, ...contact);