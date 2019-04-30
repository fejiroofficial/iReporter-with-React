import { SIGN_UP, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOG_OUT } from '../actions/actionTypes';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, user: action.user, isLoggedIn: true };
    case SIGN_IN_FAILURE:
      return { ...state, user: action.user };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default: return state;
  }
};
