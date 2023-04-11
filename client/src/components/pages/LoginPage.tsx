import React from 'react';
import { Button, Input } from 'reactstrap';
import useUserContext from '../../contexts/user/hooks';

export default function LoginPage(): JSX.Element {
  const { loginHandler } = useUserContext();
  return (
    <form
      onSubmit={loginHandler}
    >
      <Input id="outlined-basic" placeholder="Email" type="email" name="email" variant="outlined" />
      <Input
        id="outlined-basic2"
        placeholder="Password"
        name="password"
        type="password"
        variant="outlined"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
