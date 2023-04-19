/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentProp } from '../../utils/propHelper';

function CommentList({ comments }) {
  return (
    <div className="comments-list">
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
          />
        ))
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
};

export default CommentList;
