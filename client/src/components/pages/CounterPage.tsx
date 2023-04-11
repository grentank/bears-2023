import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react';

export default function CounterPage(): JSX.Element {
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography>value</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>+1</Button>
          <Button>-6</Button>
          <Button>C</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
