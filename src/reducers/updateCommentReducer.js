import {
  UPDATE_COMMENT_LOADING,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: '',
  message: false,
};

export default (state = initialState, action = {}) => {
  const { loading, message, data} = action;
  switch (action.type) {
    case UPDATE_COMMENT_LOADING:
      return { ...state, loading };
    case UPDATE_COMMENT_SUCCESS:
      return { ...state, loading, message, data };
    case UPDATE_COMMENT_FAILURE:
      return { ...state, loading, message };
    default: return state;
  }
};
