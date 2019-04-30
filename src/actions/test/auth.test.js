import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-localstorage-mock';
import * as actions from '../auth';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const userSignData = {
  email: 'gpspa@rocketmail.com',
  password: '123456',
  username: 'sparks',
  firstname: 'sparks',
  lastname: 'sparks',
  othernames: 'sparks',
  telephone: '08130609941'
};

const userData = {
  email: 'gpsparks@rocketmail.com',
  password: '123456',
};

describe('user SIGN_UP action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FAILURE when request fails', async () => {
    await fetchMock.postOnce('/api/v1/auth/signup', {
      body: { userSignData },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_IN_FAILURE, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.signupUser(userSignData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('user SIGN_IN action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SUCCESS when request has been done', () => {
    fetchMock.postOnce('/api/v1/auth/login', {
      body: {
        userData,
      },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_IN_SUCCESS, user: userData },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.loginUser(userData)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FAILURE when request has failed', () => {
    fetchMock.postOnce('/api/v1/auth/login', {
      body: { userDatass: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_IN_FAILURE, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.loginUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});