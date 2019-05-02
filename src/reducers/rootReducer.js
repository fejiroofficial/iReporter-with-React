import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reportReducer from './reportReducer';
import specificRecord from './specificRecord';
import updateCommentReducer from './updateCommentReducer';
import updateLocationReducer from './updateLocationReducer';

export default combineReducers({
  authReducer,
  reportReducer,
  specificRecord,
  updateCommentReducer,
  updateLocationReducer,
});
