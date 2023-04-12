import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import {
  clear,
  decrement,
  increment,
  incrementByAmount,
} from '../../features/redux/slices/counter/counterSlice';

export default function CounterPage(): JSX.Element {
  const value = useAppSelector((store) => store.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography>{value}</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => dispatch(increment())}>+1</Button>
          <Button onClick={() => dispatch(decrement())}>-1</Button>
          <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
          <Button onClick={() => dispatch(clear())}>C</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
