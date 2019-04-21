import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reportReducer from './reportReducer';

export default combineReducers({
  authReducer,
  reportReducer,
});
