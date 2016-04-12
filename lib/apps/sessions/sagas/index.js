import { signOn, reload, signOut, verify } from './session';
import { resetPassword, resend } from './forgotten';
import { register } from './register';

export default [ signOn, reload, signOut, verify, resetPassword, resend, register ];