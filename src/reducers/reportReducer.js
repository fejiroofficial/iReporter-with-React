import { REPORT_LOADING, REPORT_SUCCESS, REPORT_FAILURE } from '../actions/actionTypes';


const initialState = {
  loading: false,
  message: false,
  latitude: '',
  longitude: '',
};

export default (state = initialState, action = {}) => {
  const { loading, message, latitude, longitude } = action;
  switch (action.type) {
    case REPORT_LOADING:
    case REPORT_SUCCESS:
    case REPORT_FAILURE:
      return { ...state, loading, message };
    case 'REPORT_MAP_LOADING':
      return { ...state, latitude, longitude };
    default: return state;
  }
};
