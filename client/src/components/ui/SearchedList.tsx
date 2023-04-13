import React from 'react';
import { Grid, List, ListItemButton, ListItemText } from '@mui/material';
import PostItem from './PostItem';
import { useAppSelector } from '../../features/redux/hooks';

export default function SearchedList(): JSX.Element {
  const allPosts = useAppSelector((store) => store.posts.search);
  return (
    <Grid container spacing={4}>
      <List component="nav" aria-label="secondary mailbox folder">
        {allPosts.map((post) => (
          <ListItemButton key={post.id}>
            <ListItemText primary={post.body} />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
}
