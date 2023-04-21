/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should category typing correctly
 *   - should handle body typing correctly
 *   - should call ThreadInput function when Buat button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await userEvent.type(titleInput, 'thread title');

    // Assert
    expect(titleInput).toHaveValue('thread title');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await userEvent.type(categoryInput, 'general');

    // Assert
    expect(categoryInput).toHaveValue('general');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput onCreate={() => {}} />);
    const bodyInput = await screen.getByTestId('input-body');

    // Action
    await userEvent.click(bodyInput);
    await userEvent.keyboard('lorem ipsum dolor sit amet');

    // Assert
    expect(bodyInput).toHaveTextContent('lorem ipsum dolor sit amet');
  });

  it('should call ThreadInput function when thread button is clicked', async () => {
    // Arrange
    const mockThread = jest.fn();
    render(<ThreadInput onCreate={mockThread} />);
    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'thread title');

    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'theCategory');

    const threadInput = await screen.getByTestId('input-body');
    await userEvent.click(threadInput);
    await userEvent.keyboard('lorem ipsum dolor sit amet');

    const threadButton = await screen.getByRole('button', { name: 'Create' });

    // Action
    await userEvent.click(threadButton);

    // Assert
    expect(mockThread).toBeCalledWith({
      title: 'thread title',
      category: 'theCategory',
      body: 'lorem ipsum dolor sit amet',
    });
  });
});
