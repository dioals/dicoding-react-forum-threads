import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_THREAD_DETAIL: 'TOGGLE_UP_THREAD_DETAIL',
  TOGGLE_DOWN_THREAD_DETAIL: 'TOGGLE_DOWN_THREAD_DETAIL',
  CLEAR_VOTE_THREAD_DETAIL: 'CLEAR_LIKE_THREAD_DETAIL',
  ADD_COMMMENT: 'detailThread/addComment',
  TOGGLE_UP_COMMENT: 'TOGGLE_UP_COMMENT',
  TOGGLE_DOWN_COMMENT: 'TOGGLE_DOWN_COMMENT',
  TOGGLE_CLEAR_VOTE_COMMENT: 'TOGGLE_CLEAR_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function clearVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncAddComment(id, content) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment(id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpThreadDetailActionCreator(authUser.id));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleDownThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDownThreadDetailActionCreator(authUser.id));

    try {
      await api.downvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutalizevoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}
function toggleUpVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_UP_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}
function toggleDownVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DOWN_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}
function toggleClearVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_CLEAR_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncToggleUpComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.upvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.downvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncClearVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleClearVoteCommentActionCreator(authUser, commentId));
    try {
      await api.neutralizevoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  asyncAddComment,
  asyncToggleUpThreadDetail,
  asyncToggleDownThreadDetail,
  asyncClearVoteThreadDetail,
  toggleDownThreadDetailActionCreator,
  clearVoteThreadDetailActionCreator,
  toggleUpThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleClearVoteCommentActionCreator,
  asyncToggleUpComment,
  asyncToggleDownComment,
  asyncClearVoteComment,
};
