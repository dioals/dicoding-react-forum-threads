/* eslint-disable no-underscore-dangle */
/**
 * skenario test
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when register success
 *  - should dispatch action and call alert correctly when register failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';

const fakeRegisterResponse = {
  data: {
    user: {
      id: 'user-123',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
  },
};

const fakeUserData = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password',
};

const fakeErrorResponse = new Error('Ups, sometwhing went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api.register = api._register;

    delete api._register;
  });
  it('should dispatch action correctly when register success', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock register
    api.register = jest.fn();

    // action
    await asyncRegisterUser(fakeUserData)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.register).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncRegisterUser(fakeUserData)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
