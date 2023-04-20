/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle Registered email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';
import '@testing-library/jest-dom';

describe('LoginInput Component', () => {
  it('should handle Registered email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Registered email');

    // Action
    await userEvent.type(emailInput, 'dioals@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('dioals@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'namaku');

    // Assert
    expect(passwordInput).toHaveValue('namaku');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Registered email');
    await userEvent.type(emailInput, 'dioals@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'namaku');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'dioals@gmail.com',
      password: 'namaku',
    });
  });
});
