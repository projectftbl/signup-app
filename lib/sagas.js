import createSagaMiddleware from 'redux-saga';
import sessions from './apps/sessions/sagas';
import member from './apps/member/sagas';

export default createSagaMiddleware(...sessions, ...member);