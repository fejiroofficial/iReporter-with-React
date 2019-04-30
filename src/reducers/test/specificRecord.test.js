import expect from 'expect';
import specificReducer from '../specificRecord';
import {
  FETCH_SPECIFIC_LOADING,
  FETCH_SPECIFIC_SUCCESS,
  FETCH_SPECIFIC_FAILURE,
} from '../../actions/actionTypes';


const state = {
  loading: false,
  data: '',
  message: false,
  latitude: '',
  longitude: '',
};

describe('Fetch single record reducer: ', () => {
  it('should have the correct default state', () => {
    expect(specificReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      data: '',
      message: false,
      latitude: '',
      longitude: '',
    });
  });

  it('should load when record is fetched', () => {
    const action = {
      type: FETCH_SPECIFIC_LOADING,
      loading: true,
    };
    const result = specificReducer(state, action);
    const expected = { ...state, loading: true };
    expect(result).toEqual(expected);
  });

  it('should fetch record successfully', () => {
    const action = {
      type: FETCH_SPECIFIC_SUCCESS,
      loading: false,
      data: '',
      message: false,
      latitude: '',
      longitude: '',
    };
    const result = specificReducer(state, action);
    const expected = { 
      ...state, 
      loading: false,
      data: '',
      message: false,
      latitude: '',
      longitude: '',
    };
    expect(result).toEqual(expected);
  });

});
