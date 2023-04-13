import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import SearchedList from '../ui/SearchedList';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { setSearchedPosts } from '../../features/redux/slices/posts/postsSlice';
import { getSearchPosts } from '../../types/post/postActions';

export default function SearchPage(): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearchPosts(input))
  },[input])

  // const allPosts = useAppSelector((store) => store.posts.allPosts);
  // useEffect(() => {
  //   dispatch(setSearchedPosts(allPosts));
  // }, [allPosts]);

  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          value={input}
          onChange={changeHandler}
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
      <SearchedList />
    </>
  );
}
