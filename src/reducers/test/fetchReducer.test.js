import expect from 'expect';
import fetchReducer from '../fetchReducer';
import { 
  RED_FLAG_SUCCESS,
  RED_FLAG_FAILURE,
} from '../../actions/actionTypes';


const state = {
  loaded: false,
};

describe('Fetch reducer: ', () => {
  it('should have the correct default state', () => {
    expect(fetchReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loaded: false,
    });
  });

  it('should fetch redflags successfully', () => {
    const action = {
      type: RED_FLAG_SUCCESS,
      loaded: true
    };
    const result = fetchReducer(state, action);
    const expected = { ...state, loaded: true };
    expect(result).toEqual(expected);
  });

  it('should fetch redflags unsuccessfully', () => {
    const action = {
      type: RED_FLAG_FAILURE,
      loaded: false
    };
    const result = fetchReducer(state, action);
    const expected = { ...state, loaded: false };
    expect(result).toEqual(expected);
  });
});
