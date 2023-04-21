import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';
import ThreadCategory from '../styled/ThreadCategory';

function ThreadItemHeader({
  user, id, title, category,
}) {
  const { name, avatar } = user;
  return (
    <header className="thread-item_header">
      <div className="thread-owner_info">
        <img src={avatar} alt="avatar" />
        <b>
          <p>
            {name}
            {' '}
            :
          </p>

        </b>
      </div>
      <Link to={`/thread/${id}`}><h4 className="thread-item_title">{title}</h4></Link>
      <ThreadCategory>
        {`#${category}`}
      </ThreadCategory>
    </header>
  );
}
ThreadItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};
export default ThreadItemHeader;
