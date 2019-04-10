import axios from 'axios';
import { INTERVENTION_SUCCESS, INTERVENTION_FAILURE, RED_FLAG_SUCCESS, RED_FLAG_FAILURE } from './actionTypes';

// const apiUrl = 'http://localhost:4000';

const apiUrl = 'https://ireporter-app.herokuapp.com';


export const redflagRecords = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(
        `${apiUrl}/api/v1/red-flags`,
        { headers: { Authorization: `${token}` } 
      });
      dispatch({
        type: RED_FLAG_SUCCESS,
        loaded: true,
      });
      return data;
    } catch (error) {
      dispatch({
        type: RED_FLAG_FAILURE,
        loaded: false,
      });
      return error.response.data;
    }
  };
};

export const interventionsRecords = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(
        `${apiUrl}/api/v1/interventions`,
        { headers: { Authorization: `${token}` } 
      });
      dispatch({
        type: INTERVENTION_SUCCESS,
        loaded: true,
      });
      return data;
    } catch (error) {
      dispatch({
        type: INTERVENTION_FAILURE,
        loaded: false,
      });
      return error.response.data;
    }
  };
};