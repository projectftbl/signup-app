import { combineReducers } from 'redux'; 
import password from './ducks/password';  
import member from './ducks/member';  

export default combineReducers({
  password
, member
});