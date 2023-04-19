import React from 'react';
import {
  MdCreate, MdGroup, MdLeaderboard, MdLogout,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signout }) {
  return (
    <div className="navigation-form">
      <Link to="/create">
        <button type="button" className="nav-btn" title="Threads">
          <MdCreate className="nav-icon" />
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="nav-btn" title="Threads">
          <MdGroup className="nav-icon" />
        </button>
      </Link>
      <Link to="/leaderboards">
        <button type="button" className="nav-btn" title="Leaderboard">
          <MdLeaderboard className="nav-icon" />
        </button>
      </Link>
      <button type="button" className="nav-btn" onClick={signout} title="Sign out">
        <MdLogout className="nav-icon" />
      </button>
    </div>
  );
}

Navigation.propTypes = {
  signout: PropTypes.func.isRequired,
};

export default Navigation;
