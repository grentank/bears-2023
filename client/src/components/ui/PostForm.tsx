import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import useHandlersContext from '../../contexts/handlers/hooks';

export default function PostForm(): JSX.Element {
  const { addPostHandler } = useHandlersContext();
  const [input, setInput] = useState<string>('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    void addPostHandler(e, input);
    setInput('');
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup floating>
            <Input
              value={input}
              onChange={changeHandler}
              id="exampleTitle"
              name="title"
              placeholder="Title"
              type="text"
            />
            <Label for="exampleTitle">Title</Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Col>
    </Row>
  );
}
