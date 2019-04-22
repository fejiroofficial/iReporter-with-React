import {
  FETCH_SPECIFIC_LOADING,
  FETCH_SPECIFIC_SUCCESS,
  FETCH_SPECIFIC_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: '',
  message: false,
  latitude: '',
  longitude: '',
};

export default (state = initialState, action = {}) => {
  const { loading, data, message, latitude, longitude } = action;
  switch (action.type) {
    case FETCH_SPECIFIC_LOADING:
      return { ...state, loading };
    case FETCH_SPECIFIC_SUCCESS:
      return { ...state, loading, data, message, latitude, longitude };
    case FETCH_SPECIFIC_FAILURE:
      return { ...state, loading, message };
    default: return state;
  }
};