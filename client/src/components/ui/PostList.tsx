import React from 'react';
import { Grid } from '@mui/material';
import PostItem from './PostItem';
import type { PostType } from '../../types/post/postTypes';

export default function PostList(): JSX.Element {
  const allPosts: PostType[] = [
    { id: 1, title: 'title', body: 'body', userId: 1, createdAt: new Date() },
    { id: 2, title: 'titl2', body: 'bod2', userId: 1, createdAt: new Date() },
    { id: 3, title: 'titl3', body: 'bod3', userId: 1, createdAt: new Date() },
    { id: 4, title: 'titl4', body: 'bod4', userId: 1, createdAt: new Date() },
  ];
  return (
    <Grid container spacing={4}>
      {allPosts.map((post) => (
        <Grid key={post.id} item xs={4}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
