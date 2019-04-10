import { RED_FLAG_SUCCESS, RED_FLAG_FAILURE, INTERVENTION_RECORD } from '../actions/actionTypes';

const initialState = {
  loaded: false,
};

export default (state= initialState, action = {}) => {
  switch (action.type) {
    case RED_FLAG_SUCCESS:
      return { loaded: action.loaded };
    case RED_FLAG_FAILURE:
      return { loaded: action.loaded };
    case INTERVENTION_RECORD:
      return { loaded: action.loaded};
    default: return state;
    }
};
