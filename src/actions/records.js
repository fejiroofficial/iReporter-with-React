import axios from 'axios';
import {
  INTERVENTION_SUCCESS,
  INTERVENTION_FAILURE,
  RED_FLAG_SUCCESS,
  RED_FLAG_FAILURE,
  FETCH_SPECIFIC_LOADING,
  FETCH_SPECIFIC_SUCCESS,
  FETCH_SPECIFIC_FAILURE,
} from './actionTypes';

const apiUrl = 'https://ireporter-app.herokuapp.com';


export const redflagRecords = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(
        `${apiUrl}/api/v1/red-flags`,
        {
          headers: { Authorization: `${token}` }
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
        {
          headers: { Authorization: `${token}` }
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


export const fetchRecord = (params) => {
  const { recordType, id } = params;
  return async (dispatch) => {
    dispatch({
      type: FETCH_SPECIFIC_LOADING,
      loading: true,
    });
    try {
      const token = localStorage.getItem('token');
      const { data: { data } } = await axios.get(
        `${apiUrl}/api/v1/${recordType}/${id}`,
        {
          headers: { Authorization: `${token}` }
        });

      const location = data.location;
      const latlngStr = location.split(',', 2);
      const latitude = parseFloat(latlngStr[0]);
      const longitude = parseFloat(latlngStr[1]);
      dispatch({
        type: FETCH_SPECIFIC_SUCCESS,
        loading: false,
        data: data,
        message: false,
        latitude,
        longitude,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SPECIFIC_FAILURE,
        loading: false,
        message: error.response.data.errors,
      });
      return error.response.data.errors;
    }
  };
};
