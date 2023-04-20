/**
 * test scenario for threadsReducer
 *
 * - threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREAD action
 *  - should return the threads with the new thread when given by CREATE_THREAD action
 *  - should return the threads with the toggled like thread when given by UPVOTE_THREAD action
 *  - should return the threads with the toggled like thread when given by DOWNVOTE_THREAD action
 *  - should return the threads with the toggled like thread when given by CLEAR_VOTE_THREAD action
 *
 */

import threadReducer from './reducer';
import { ActionType } from './action';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread--ERMoiIVb_18Vf1t',
            title: 'tester',
            body: 'tester',
            category: 'tester',
            createdAt: '2022-12-21T15:10:52.485Z',
            ownerId: 'user-Kip89kENPglHYaq5',
            totalComments: 0,
            upVotesBy: [
              'user-Kip89kENPglHYaq5',
            ],
            downVotesBy: [],
          },
          {
            id: 'thread-08_nUU2fhu1P5nre',
            title: 'Pengalaman Belajar React di Dicoding',
            body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
            category: 'react',
            createdAt: '2022-11-13T09:59:31.019Z',
            ownerId: 'user-5PqX6Ldhnk_ifroq',
            totalComments: 1,
            upVotesBy: [
              'user-6oWew2w2Wx5xLUTU',
              'user-5PqX6Ldhnk_ifroq',
            ],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [
          'user-Kip89kENPglHYaq5',
        ],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: {
          id: 'thread-08_nUU2fhu1P5nre',
          title: 'Pengalaman Belajar React di Dicoding',
          body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
          category: 'react',
          createdAt: '2022-11-13T09:59:31.019Z',
          ownerId: 'user-5PqX6Ldhnk_ifroq',
          totalComments: 1,
          upVotesBy: [
            'user-6oWew2w2Wx5xLUTU',
            'user-5PqX6Ldhnk_ifroq',
          ],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the new thread when given by UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-5PqX6Ldhnk_ifroq',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the new thread when given by DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-5PqX6Ldhnk_ifroq',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the new thread when given by CLEAR_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: ['user-test'],
        downVotesBy: ['user-test'],
      },
    ];
    const action = {
      type: ActionType.CLEAR_VOTE_THREAD,
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-test',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
