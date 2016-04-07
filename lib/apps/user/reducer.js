import { combineReducers } from 'redux'; 
import password from './ducks/password';  
import user from './ducks/user';  

export default combineReducers({
  password
, user
});