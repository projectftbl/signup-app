import { signOn, signOut, verify } from './session';
import { forgotten } from './forgotten';
import { register } from './register';

export default [ signOn, signOut, verify, forgotten, register ];