import axios from 'axios';
import { SIGN_UP, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOG_OUT } from './actionTypes';

// const apiUrl = 'http://localhost:4000';

const apiUrl = 'https://ireporter-app.herokuapp.com';


export const signupUser = userData => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/auth/signup`, { ...userData });
      localStorage.setItem('token', data.token);
      dispatch({
        type: SIGN_UP,
        user: userData,
      });
      return data;
    } catch (error) {
      dispatch({
        type: SIGN_UP,
        user: {}
      });
      return error.response.data;
    }
  };
};

export const loginUser = userData => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/auth/login`, { ...userData });
      localStorage.setItem('token', data.token);
      dispatch({
        type: SIGN_IN_SUCCESS,
        user: userData,
      });
      return data;
    } catch (error) {
      dispatch({
        type: SIGN_IN_FAILURE,
        user: {}
      });
      return error.response.data;
    }
  };
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOG_OUT,
  });
};

