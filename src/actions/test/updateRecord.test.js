import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-localstorage-mock';
import * as actions from '../updateRecord';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UPDATE_COMMENT_RECORD', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fail when request is unsuccessful', async () => {
    await fetchMock.postOnce('/api/v1/red-flags/1/comment', {
      body: { userData: ['do something'] },
      headers: {
        'content-type': 'application/json',
      }
    });
    const expectedActions = [
      { type: types.UPDATE_COMMENT_LOADING, loading: true },
      { type: types.UPDATE_COMMENT_FAILURE, loading: false, message: undefined }
    ];
    const store = mockStore({ updateCommentReducer: {} });

    return store.dispatch(actions.updateCommentAction({ formData: {} }, { recordType: 'reflags', id: 1 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('UPDATE_LOCATION_RECORD', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fail when request is unsuccessful', async () => {
    await fetchMock.postOnce('/api/v1/red-flags/1/location', {
      body: { userData: ['do something'] },
      headers: {
        'content-type': 'application/json',
      }
    });
    const expectedActions = [
      { type: types.UPDATE_LOCATION_LOADING, loading: true },
      { type: types.UPDATE_LOCATION_FAILURE, loading: false, message: undefined }
    ];
    const store = mockStore({ updateLocationReducer: {} });

    return store.dispatch(actions.updateLocationAction({ formData: {} }, { recordType: 'reflags', id: 1 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
