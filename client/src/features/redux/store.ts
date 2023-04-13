import type { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './slices/counter/counterSlice';
import postsReducer from './slices/posts/postsSlice';
import userReducer from './slices/user/userSlice';
import searchPostsWatcher from '../saga/searchSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(searchPostsWatcher);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export type ThunkActionCreater<PayloadType = void, ReturnType = void> = (
  payload: PayloadType,
) => AppThunk<ReturnType>;
