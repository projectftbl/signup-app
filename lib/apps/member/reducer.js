import { combineReducers } from 'redux'; 
import password from './ducks/password';  
import member from './ducks/member';  
import accounts from './ducks/accounts';  

export default combineReducers({
  password
, member
, accounts
});