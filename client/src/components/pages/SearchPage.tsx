import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useCallback, useState } from 'react';

export default function SearchPage(): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
      <OutlinedInput
        value={input}
        onChange={changeHandler}
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">ф</InputAdornment>}
        label="Search"
      />
    </FormControl>
  );
}
