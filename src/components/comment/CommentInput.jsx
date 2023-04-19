import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncAddComment } from '../../states/threadDetail/actions';

function CommentInput({ threadId }) {
  const [content, setValue] = React.useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  const onAddComment = () => {
    dispatch(asyncAddComment(threadId, content));
  };

  return (
    <form className="comment-input">
      <div className="comment-input_field" contentEditable onInput={onChange} data-testid="comment-input_field" />
      <button type="button" onClick={() => onAddComment()}>send</button>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default CommentInput;
