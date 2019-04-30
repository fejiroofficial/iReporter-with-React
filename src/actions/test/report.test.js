import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-localstorage-mock';
import * as actions from '../report';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch SINGLE_RECORD', () => {
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
      { type: types.REPORT_LOADING, loading: true, message: false },
      { type: types.REPORT_FAILURE, loading: false, message: undefined }
    ];
    const store = mockStore({ reportReducer: {} });

    return store.dispatch(actions.reportIncident({ requestedData: {}, props: {} })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
