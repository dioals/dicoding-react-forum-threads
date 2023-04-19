import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from '../comment/CommentInput';
import CommentList from '../comment/CommentList';
import { detailProp } from '../../utils/propHelper';

function ThreadDetailComment({ detail }) {
  const { comments } = detail;
  return (
    <div className="thread-comment">
      <div className="thread-comment_input">
        <h3>Add comment</h3>
        <CommentInput threadId={detail.id} />
      </div>
      <div className="thread-comment_list">
        <h3>{`Comments (${comments.length})`}</h3>
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

ThreadDetailComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailComment;
