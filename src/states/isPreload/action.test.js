/* eslint-disable no-underscore-dangle */
/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';
import api from '../../utils/api';

const fakeRegisterResponse = {
  id: 'user-777',
  name: 'Dio Als',
  email: 'dioals@gmail.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, sometwhing went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._OwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._OwnProfile;

    delete api._OwnProfile;
  });

  it('should dispatch action correctly data fetching success', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assertw
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeRegisterResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
