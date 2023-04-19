import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import LeaderboardList from '../components/leaderboard/LeaderbordList';

function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="leaderboard-page">
      <h2>Top User</h2>
      <LeaderboardList leaderboardList={leaderboardList} />
    </div>
  );
}

export default LeaderboardPage;
