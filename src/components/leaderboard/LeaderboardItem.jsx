import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../../utils/propHelper';

function LeaderboardItem({ user, score }) {
  const { name, avatar } = user;

  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item_user-info">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <p className="leaderboard-item_score">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userProp).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
