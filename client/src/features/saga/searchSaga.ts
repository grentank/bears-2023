import type { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';
import { delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import type { AnyAction } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { GetSearchPostsAction } from '../../types/post/postActions';
import { GET_SEARCH_POSTS } from '../../types/post/postActions';
import type { PostType } from '../../types/post/postTypes';
import { setSearchedPosts } from '../redux/slices/posts/postsSlice';

const getPostsFromServer = (searchString: string): Promise<AxiosResponse<PostType[]>> =>
  axios<PostType[]>(`/posts/search/${searchString}`);

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* searchPostsWorker(
  action: GetSearchPostsAction,
): Generator<CallEffect | PutEffect<AnyAction>, void, AxiosResponse<PostType[]>> {
  try {
    yield delay(2000);
    const { data } = yield call(getPostsFromServer, action.payload);
    yield put(setSearchedPosts(data));
  } catch (e) {
    yield put({ type: 'FAILED_TO_LOAD_POSTS' });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* searchPostsWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_SEARCH_POSTS, searchPostsWorker);
}

export default searchPostsWatcher;
