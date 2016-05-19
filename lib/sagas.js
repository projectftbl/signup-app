import createSagaMiddleware from 'redux-saga';
import { sagas as io } from '@ftbl/io';
import { sagas as session } from '@ftbl/session-web';
import { sagas as user } from '@ftbl/user-web';
import { sagas as contact } from '@ftbl/contact-web';
import { sagas as signup } from '@ftbl/signup-web';
import { sagas as member } from '@ftbl/member-web';
import members from './apps/members/sagas';

export default createSagaMiddleware(...io, ...session, ...signup, ...member, ...members, ...user, ...contact);