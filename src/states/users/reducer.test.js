/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by users/receive action
 *
 */

import { ActionType } from './action';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'user-6oWew2w2Wx5xLUTU',
            name: 'Dicoding',
            email: 'admin@dicoding.com',
            avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
          },
          {
            id: 'user-5PqX6Ldhnk_ifroq',
            name: 'Dimas Saputra',
            email: 'dimas@dicoding.com',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
