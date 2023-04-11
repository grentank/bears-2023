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

export default function AddPostForm(): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        {/* <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            value={input}
            onChange={changeHandler}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">Пост:</InputAdornment>}
            label="Search"
          />
          <Button type="button">+1</Button>
        </FormControl> */}
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
