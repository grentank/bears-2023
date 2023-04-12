import React from 'react';
import { Grid } from '@mui/material';
import PostItem from './PostItem';
import { useAppSelector } from '../../features/redux/hooks';

export default function PostList(): JSX.Element {
  const allPosts = useAppSelector(store => store.posts.allPosts)
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
