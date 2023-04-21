import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../../utils/propHelper';
import formatDate from '../../utils/utils';
import ThreadCategory from '../styled/ThreadCategory';

function ThreadDetailHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;
  return (
    <header className="thread-header">
      <div className="thread-owner_info">
        <img src={avatar} alt="avatar" />
        <b>
          <p>
            {name}
            {' '}
          </p>
        </b>
        <p>{formatDate(createdAt)}</p>
      </div>
      <h2 className="thread-header_title">
        {title}
      </h2>
      <ThreadCategory>
        {`#${category}`}
      </ThreadCategory>
    </header>
  );
}

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
export default ThreadDetailHeader;
