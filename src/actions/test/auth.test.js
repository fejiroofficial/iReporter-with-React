import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-localstorage-mock';
import * as actions from '../auth';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user SIGN_UP action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SUCCESS when request has been done', async () => {
    await fetchMock.postOnce('/api/v1/auth/signup', {
      body: { userData: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_UP, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.signupUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FAILURE when request has failed', async () => {
    await fetchMock.postOnce('/api/v1/auth/signup', {
      body: { userDatass: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_UP, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.signupUser()).then(() => {
      // return of async actions
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
      body: { userData: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SIGN_IN, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.loginUser()).then(() => {
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
      { type: types.SIGN_IN, user: {} },
    ];
    const store = mockStore({ authReducer: {} });

    return store.dispatch(actions.loginUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});