import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionButton from '../ActionButton';
import { detailProp } from '../../utils/propHelper';
import { asyncToggleDownThreadDetail, asyncToggleUpThreadDetail } from '../../states/threadDetail/actions';

function ThreadDetailFooter({
  detail,
}) {
  const {
    upVotesBy, downVotesBy,
  } = detail;

  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToggleUpThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThreadDetail());
  };

  return (
    <footer className="thread-detail_footer">
      <ActionButton
        type="up"
        count={upVotesBy.length}
        onButtonClicked={onUpvoteThread}
      />
      <ActionButton
        type="down"
        count={downVotesBy.length}
        onButtonClicked={onDownVoteThread}
      />
    </footer>
  );
}

ThreadDetailFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailFooter;
