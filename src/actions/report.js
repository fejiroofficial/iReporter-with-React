import axios from 'axios';
import { REPORT_LOADING, REPORT_SUCCESS } from './actionTypes';

const apiUrl = 'https://ireporter-app.herokuapp.com';


export const reportIncident = (requestData, props) => {
  const incidentType = requestData.incidentType;
  return async (dispatch) => {
    dispatch({
      type: REPORT_LOADING,
      loading: true,
      message: false,
    });
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.post(
        `${apiUrl}/api/v1/${incidentType}`,
        requestData,
        {
          headers: { Authorization: token }
        }
      );
      dispatch({
        type: REPORT_SUCCESS,
        loading: false,
        message: false,
      });
      // redirection here
      props.history.push(`/ireport/${incidentType}/${data.data[0].record.id}`);
    } catch (error) {
      dispatch({
        type: REPORT_SUCCESS,
        loading: false,
        message: error.response.data.errors,
      });
      return error.response.data.errors;
    }
  };
};
