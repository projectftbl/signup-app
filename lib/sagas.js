import createSagaMiddleware from 'redux-saga';
import { sagas as session } from '@ftbl/session-web';
import member from './apps/member/sagas';
import members from './apps/members/sagas';
import user from './apps/user/sagas';
import contact from './apps/contact/sagas';
import common from './sagas/index';

export default createSagaMiddleware(...common, ...session, ...member, ...members, ...user, ...contact);