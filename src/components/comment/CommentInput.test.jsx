/**
 * skenario testing
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call CommentInput function when Kirim button is clicked
 */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentInput from './CommentInput';
import '@testing-library/jest-dom';

describe('CommentInput component', () => {
  it('should handle comment typing correctly', async () => {
    // Arrange
    render(<CommentInput onAddComment={() => {}} />);
    const commentInput = await screen.getByTestId('comment-input_field');

    // Action
    await act(() => userEvent.click(commentInput));
    await act(() => userEvent.keyboard('lorem ipsum'));

    // Assert
    expect(commentInput).toHaveTextContent('lorem ipsum');
  });

  it('should call CommentInput function when send button is clicked', async () => {
    // Arrange
    const mockComment = jest.fn();
    render(<CommentInput onAddComment={mockComment} />);
    const commentInput = await screen.getByTestId('comment-input_field');
    await userEvent.click(commentInput);
    await userEvent.keyboard('lorem ipsum');
    const commentButton = await screen.getByRole('button', { name: 'send' });

    // Action
    await act(() => userEvent.click(commentButton));

    // Assert
    expect(mockComment).toBeCalledWith({
      content: 'lorem ipsum',
    });
  });
});
