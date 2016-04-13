import { signOn, reload, signOut, verify, invalid } from './session';
import { resetPassword, resend } from './forgotten';
import { register } from './register';

export default [ signOn, reload, signOut, verify, invalid, resetPassword, resend, register ];