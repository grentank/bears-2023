import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PostType, PostsSliceType } from '../../../../types/post/postTypes';

// Define the initial state using that type
const initialState: PostsSliceType = {
  allPosts: [],
  favorites: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.allPosts = action.payload;
    },
    addPost: (state, action: PayloadAction<PostType>) => {
      state.allPosts.unshift(action.payload);
    },
    deletePost: (state, action: PayloadAction<PostType['id']>) => {
      const foundIndex = state.allPosts.findIndex((post) => post.id === action.payload);
      state.allPosts.splice(foundIndex, 1);
    },
    modifyPost: (state, action: PayloadAction<PostType>) => {
      const foundIndex = state.allPosts.findIndex((post) => post.id === action.payload.id);
      state.allPosts[foundIndex] = action.payload;
    },
  },
});

export const { addPost, deletePost, modifyPost, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
