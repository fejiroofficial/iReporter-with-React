import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reportReducer from './reportReducer';
import specificRecord from './specificRecord';
import updateCommentReducer from './updateCommentReducer';

export default combineReducers({
  authReducer,
  reportReducer,
  specificRecord,
  updateCommentReducer,
});
