import { SUCCESS_TOAST, FAILURE_TOAST } from '../actions/actionTypes';

const initialState = {
  value: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SUCCESS_TOAST:
    return state;
  case FAILURE_TOAST:
    return state;
  default: return state;
  }
};
