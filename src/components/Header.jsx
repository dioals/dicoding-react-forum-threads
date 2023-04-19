import React from 'react';
import PropTypes from 'prop-types';

function Header({ authUser }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="header-home">
      <img src={avatar} alt={id} title={name} />
      <p>
        Welcome,
        {' '}
        {name}
      </p>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Header.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default Header;
