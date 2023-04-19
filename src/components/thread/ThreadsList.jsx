/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../../utils/propHelper';

function ThreadsList({ threadList }) {
  return (
    <div className="threads-list">
      {threadList.map((thread, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ThreadItem key={index} {...thread} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
};

export default ThreadsList;
