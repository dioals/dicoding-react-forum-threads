import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';
import { userProp } from '../../utils/propHelper';
import formatDate from '../../utils/utils';
import { asyncToggleDownComment, asyncToggleUpComment } from '../../states/threadDetail/actions';

function CommentItem({
  id, owner, createdAt, content, upVotesBy, downVotesBy,
}) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onUpComment = () => {
    dispatch(asyncToggleUpComment(id));
  };

  const onDownComment = () => {
    dispatch(asyncToggleDownComment(id));
  };
  return (
    <div className="comment-item">
      <header className="comment-item_header">
        <div className="comment-item_owner-info">
          <img src={`${owner.avatar}`} alt="avatar" />
          <b><p>{owner.name}</p></b>
        </div>
      </header>
      <p>{content}</p>
      <footer>
        <ActionButton
          authUser={authUser}
          type="up"
          onButtonClicked={onUpComment}
          count={upVotesBy.length}
        />
        <ActionButton
          authUser={authUser}
          type="down"
          count={downVotesBy.length}
          onButtonClicked={onDownComment}
        />
        <p className="posted-at">{formatDate(createdAt)}</p>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
