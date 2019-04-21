import { REPORT_LOADING, REPORT_SUCCESS, REPORT_FAILURE } from '../actions/actionTypes';


const initialState = {
  loading: false,
  message: false,
};

export default (state = initialState, action = {}) => {
  const { loading, message } = action;
  switch (action.type) {
    case REPORT_LOADING:
    case REPORT_SUCCESS:
    case REPORT_FAILURE:
      return { ...state, loading, message };
    default: return state;
  }
};
