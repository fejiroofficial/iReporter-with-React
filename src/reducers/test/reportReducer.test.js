import expect from 'expect';
import reportReducer from '../reportReducer';
import {
  REPORT_LOADING,
} from '../../actions/actionTypes';


const state = {
  loading: false,
  message: false,
  latitude: '',
  longitude: '',
};

describe('Report reducer: ', () => {
  it('should have the correct default state', () => {
    expect(reportReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      message: false,
      latitude: '',
      longitude: '',
    });
  });

  it('should load when report is made', () => {
    const action = {
      type: REPORT_LOADING,
      loading: true,
      message: false,
    };
    const result = reportReducer(state, action);
    const expected = { ...state, loading: true, message: false };
    expect(result).toEqual(expected);
  });

  it('should load map', () => {
    const action = {
      type: 'REPORT_MAP_LOADING',
      latitude: '',
      longitude: '',
    };
    const result = reportReducer(state, action);
    const expected = { ...state, latitude: '', longitude: '' };
    expect(result).toEqual(expected);
  });
});
