import React from 'react';
import PropTypes from 'prop-types';

function CommentInput({ onAddComment }) {
  const [content, setValue] = React.useState('');

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  return (
    <form className="comment-input">
      <div className="comment-input_field" contentEditable onInput={onChange} data-testid="comment-input_field" />
      <button type="button" onClick={() => onAddComment({ content })}>send</button>
    </form>
  );
}

CommentInput.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default CommentInput;
