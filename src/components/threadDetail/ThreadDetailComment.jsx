import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CommentInput from '../comment/CommentInput';
import CommentList from '../comment/CommentList';
import { detailProp } from '../../utils/propHelper';
import { asyncAddComment } from '../../states/threadDetail/actions';

function ThreadDetailComment({ detail }) {
  const { comments } = detail;
  const dispatch = useDispatch();
  const onAddComment = (content) => {
    dispatch(asyncAddComment(detail.id, content));
  };
  return (
    <div className="thread-comment">
      <div className="thread-comment_input">
        <h3>Add comment</h3>
        <CommentInput onAddComment={onAddComment} />
      </div>
      <div className="thread-comment_list">
        <h3>{`Comments (${comments.length})`}</h3>
        <CommentList onAddComment={onAddComment} />
      </div>
    </div>
  );
}

ThreadDetailComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailComment;
