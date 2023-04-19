import PropTypes from 'prop-types';

const userProp = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

const threadProp = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  user: PropTypes.shape(userProp),
};

const leaderboardProp = {
  user: PropTypes.shape(userProp),
  score: PropTypes.number,
};

const commentProp = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userProp),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

const detailProp = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userProp),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.arrayOf(PropTypes.shape(userProp)),
};

export {
  userProp, threadProp, commentProp, leaderboardProp, detailProp,
};
