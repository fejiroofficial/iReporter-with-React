import axios from 'axios';
import { SIGN_UP, SIGN_IN } from './actionTypes';

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
        type: SIGN_IN,
        user: userData,
      });
      return data;
    } catch (error) {
      dispatch({
        type: SIGN_IN,
        user: {}
      });
      return error.response.data;
    }
  };
};

