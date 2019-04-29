import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-localstorage-mock';
import * as actions from '../records';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('fetch RED_FLAGS', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fail when request is unsuccessful', async () => {
    await fetchMock.postOnce('/api/v1/red-flags', {
      body: { userData: ['do something'] },
      headers: {
        'content-type': 'application/json',
      }
    });
    const expectedActions = [
      { type: types.RED_FLAG_FAILURE, loaded: false },
    ];
    const store = mockStore({ reportReducer: {} });

    return store.dispatch(actions.redflagRecords()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetch INTERVENTIONS', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fail when request is unsuccessful', async () => {
    await fetchMock.postOnce('/api/v1/interventions', {
      body: { userData: ['do something'] },
      headers: {
        'content-type': 'application/json',
      }
    });
    const expectedActions = [
      { type: types.INTERVENTION_FAILURE, loaded: false },
    ];
    const store = mockStore({ reportReducer: {} });

    return store.dispatch(actions.interventionsRecords()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetch SINGLE_RECORD', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fail when request is unsuccessful', async () => {
    await fetchMock.postOnce('/api/v1/red-flags/1', {
      body: { userData: ['do something'] },
      headers: {
        'content-type': 'application/json',
      }
    });
    const expectedActions = [
      { type: types.FETCH_SPECIFIC_LOADING, loading: true },
      { type: types.FETCH_SPECIFIC_FAILURE, loading: false, message: undefined }
    ];
    const store = mockStore({ reportReducer: {} });

    return store.dispatch(actions.fetchRecord({ recordType: 'red-flags', id: 1 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});