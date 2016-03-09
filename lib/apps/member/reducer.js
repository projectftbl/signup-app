import { combineReducers } from 'redux'; 
import password from './ducks/password';  
import member from './ducks/member';  
import connect from './ducks/connect';  

export default combineReducers({
  password
, member
, connect
});