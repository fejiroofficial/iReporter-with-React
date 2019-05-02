import axios from 'axios';
import {
  UPDATE_COMMENT_LOADING,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  UPDATE_LOCATION_LOADING,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_FAILURE,
} from './actionTypes';

const apiUrl = 'https://ireporter-app.herokuapp.com';

export const updateCommentAction = (formData, params) => {
  const { recordType, id } = params;
  return async (dispatch) => {
    dispatch({
      type: UPDATE_COMMENT_LOADING,
      loading: true,
    });
    try {
      const token = localStorage.getItem('token');
      const { data: { data } } = await axios.patch(
        `${apiUrl}/api/v1/${recordType}/${id}/comment`,
        {comment: formData.comment},
        {
          headers: { Authorization: `${token}` }
        });
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        loading: false,
        message: data[0].message,
        data: data[0].updated.comment,
      });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        loading: false,
        message: error.response.data.errors,
      });
      alert(error.response.data.message);
      return error.response.data.errors;
    }
  };
};

export const updateLocationAction = (locationData, params) => {
  const { recordType, id } = params;
  return async (dispatch) => {
    dispatch({
      type: UPDATE_LOCATION_LOADING,
      loading: true,
    });
    try {
      const token = localStorage.getItem('token');
      const { data: { data } } = await axios.patch(
        `${apiUrl}/api/v1/${recordType}/${id}/location`,
        { 
          latitude: locationData.latitude,
          longitude: locationData.longitude,
        },
        {
          headers: { Authorization: `${token}` }
        });
      dispatch({
        type: UPDATE_LOCATION_SUCCESS,
        loading: false,
        message: data[0].message,
        data: data[0].updated.comment,
      });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: UPDATE_LOCATION_FAILURE,
        loading: false,
        message: error.response.data.errors,
      });
      alert(error.response.data.message);
      return error.response.data.errors;
    }
  };
};
