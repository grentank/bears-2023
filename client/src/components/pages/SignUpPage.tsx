import React from 'react';
import { Button, Input } from 'reactstrap';

export default function SignUpPage(): JSX.Element {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input id="outlined-basic" placeholder="Email" type="email" name="email" variant="outlined" />
      <Input id="outlined-basic2" placeholder="Name" name="name" type="text" variant="outlined" />
      <Input
        id="outlined-basic3"
        placeholder="Password"
        name="password"
        type="password"
        variant="outlined"
      />
      <Button type="submit">Signup</Button>
    </form>
  );
}
