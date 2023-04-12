import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../../features/redux/hooks';
import { addPost } from '../../features/redux/slices/posts/postsSlice';
import { submitPostThunk } from '../../features/redux/slices/posts/thunkActions';
import type { PostForm } from '../../types/post/postTypes';

export default function AddPostForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as PostForm;
    dispatch(submitPostThunk(formData));
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="post-title"
            label="Post title"
            name="title"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="body"
            label="Post body"
            type="text"
            id="post-body"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            POST!
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
