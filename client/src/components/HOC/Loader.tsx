import { CircularProgress } from '@mui/material';
import React from 'react';

type LoaderProps = {
  children: JSX.Element;
};

export default function Loader({ children }: LoaderProps): JSX.Element {
  const user = { status: '' };
  if (user.status !== 'fetching') return children;

  return <CircularProgress />;
}
