import {
  UPDATE_LOCATION_LOADING,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: '',
  message: false,
};

export default (state = initialState, action = {}) => {
  const { loading, message, data } = action;
  switch (action.type) {
    case UPDATE_LOCATION_LOADING:
      return { ...state, loading };
    case UPDATE_LOCATION_SUCCESS:
      return { ...state, loading, message, data };
    case UPDATE_LOCATION_FAILURE:
      return { ...state, loading, message };
    default: return state;
  }
};
