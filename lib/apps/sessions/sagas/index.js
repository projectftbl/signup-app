import { signOn, reload, signOut, verify } from './session';
import { forgotten } from './forgotten';
import { register } from './register';

export default [ signOn, reload, signOut, verify, forgotten, register ];