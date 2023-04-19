import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
  CLEAR_VOTE_THREAD: 'CLEAR_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function createThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(createThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownThread(threadId) {
  return async (dispatch, getstate) => {
    dispatch(showLoading());
    const { authUser } = getstate();
    dispatch(toggleDownThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleClearVoteThread(threadId) {
  return async (dispatch, getstate) => {
    dispatch(showLoading());

    const { authUser } = getstate();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutalizevoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  createThreadActionCreator,
  createThread,
  receiveThreadsActionCreator,
  toggleUpThreadActionCreator,
  toggleDownThreadActionCreator,
  neutralizeThreadActionCreator,
  asyncToggleClearVoteThread,
  asyncToggleDownThread,
  asyncToggleUpThread,
};
