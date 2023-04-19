/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { leaderboardProp } from '../../utils/propHelper';
import LeaderboardItem from './LeaderboardItem';
import LeaderboardTitle from './LeaderboardTitle';

function LeaderboardList({ leaderboardList }) {
  return (
    <div className="leaderboards-list">
      <LeaderboardTitle />
      {leaderboardList.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))}

    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboardList: PropTypes.arrayOf(PropTypes.shape(leaderboardProp)).isRequired,
};
export default LeaderboardList;
