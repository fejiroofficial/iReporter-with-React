import expect from 'expect';
import authReducer from '../authReducer';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOG_OUT } from '../../actions/actionTypes';


const authState = {
  user: {},
  isLoggedIn: false,
};

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(authReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      user: {},
      isLoggedIn: false,
    });
  });

  it('should update state when successful', () => {
    const action = {
      type: SIGN_IN_SUCCESS,
      user: {}
    };
    const result = authReducer(authState, action);
    const expected = { ...authState, user: {}, isLoggedIn: true };
    expect(result).toEqual(expected);
  });

  it('should update state when unsuccessful', () => {
    const action = {
      type: SIGN_IN_FAILURE,
      user: {}
    };
    const result = authReducer(authState, action);
    const expected = { ...authState, user: {} };
    expect(result).toEqual(expected);
  });

  it('should logout successfully', () => {
    const action = {
      type: LOG_OUT,
    };
    const result = authReducer(authState, action);
    const expected = { ...authState, isLoggedIn: false };
    expect(result).toEqual(expected);
  });
});
