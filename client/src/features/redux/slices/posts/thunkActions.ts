import axios from 'axios';
import type { ThunkActionCreater } from '../../store';
import type { PostForm, PostType } from '../../../../types/post/postTypes';
import { addPost, deletePost, setPosts } from './postsSlice';

export const loadPostsThunk: ThunkActionCreater = () => (dispatch) => {
  axios<PostType[]>('/posts')
    .then(({ data }) => dispatch(setPosts(data)))
    .catch(console.log);
};

export const submitPostThunk: ThunkActionCreater<PostForm> = (newPost) => (dispatch) => {
  axios
    .post<PostType>('/posts', newPost)
    .then(({ data }) => dispatch(addPost(data)))
    .catch(console.log);
};

export const deletePostThunk: ThunkActionCreater<PostType['id']> = (postId) => (dispatch) => {
  axios
    .delete(`/posts/${postId}`)
    .then(() => dispatch(deletePost(postId)))
    .catch(console.log);
};
