import { combineReducers } from 'redux'; 
import password from './ducks/password';  
import profile from './ducks/profile';  

export default combineReducers({
  password
, profile
});