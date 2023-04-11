import React from 'react';
import AddPostForm from '../ui/AddPostForm';
import PostList from '../ui/PostList';

export default function PostsPage(): JSX.Element {
  return (
    <>
      <AddPostForm />
      <PostList />
    </>
  );
}
