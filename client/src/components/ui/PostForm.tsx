import React, { useContext, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import type { PostType } from '../../types/postTypes';
import { PostContext } from '../../contexts/postContext';

type PostFormProps = {
  // addPostHandler: (e: React.FormEvent<HTMLFormElement>, input: PostType['title']) => Promise<void>;
};

export default function PostForm(): JSX.Element {
  const {addPostHandler} = useContext(PostContext)!;
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
