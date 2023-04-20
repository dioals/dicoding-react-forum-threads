/**
 * test scenario for isPreloadReducer
 *
 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the isPreload when given by isPreload/set action
 *
 */

import { ActionType } from './action';
import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by isPreload/set action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
