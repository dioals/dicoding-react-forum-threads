/**
 * test scenario for asyncReciveLeaderboards
 *
 * - asyncReciveLeaderboards function
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
* */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveLeaderboard, receiveLeaderboardActionCreator } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'Als Strife',
      email: 'als@strife.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Dio Als',
      email: 'dio@als.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Oops, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original leaderboard
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    // restore original leaderboard
    api.getLeaderboard = api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch with jest
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveLeaderboardActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);
    // mock dispatch with vitest
    const dispatch = jest.fn();
    // mock alert with vitest
    window.alert = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
