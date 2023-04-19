/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by leaderboards/receive action
 *
 */

import { ActionType } from './action';
import leaderboardsReducer from './reducer';

describe('leaderboards Reducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderboards when given leaderboards receive action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARD,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-0nVaet8vQ1UXUzf-',
              name: 'Dio Als',
              email: 'dio@als.com',
              avatar: 'https://ui-avatars.com/api/?name=Dio Als&background=random',
            },
            score: 250,
          },
          {
            user: {
              id: 'user-5PqX6Ldhnk_ifroq',
              name: 'Dimas Saputra',
              email: 'dimas@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
            },
            score: 75,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
