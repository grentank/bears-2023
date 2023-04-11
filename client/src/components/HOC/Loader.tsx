import React from 'react';
import { Spinner } from 'reactstrap';
import useUserContext from '../../contexts/user/hooks';

type LoaderProps = {
  children: JSX.Element;
};

export default function Loader({ children }: LoaderProps): JSX.Element {
  const { user } = useUserContext();
  if (user.status !== 'fetching') return children;

  return (
    <Spinner
      color="primary"
      type="grow"
      style={{
        height: '31rem',
        width: '31rem',
      }}
    >
      Loading...
    </Spinner>
  );
}
