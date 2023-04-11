import React from 'react';
import { Button, Card, CardText, CardTitle } from 'reactstrap';
import type { PostType } from '../../types/postTypes';
import useHandlersContext from '../../contexts/handlers/hooks';

type PostCardProps = {
  post: PostType;
};

function PostCard({ post }: PostCardProps): JSX.Element {
  const { deleteHandler } = useHandlersContext();
  console.log('card render');
  return (
    <Card
      body
      className="text-center"
      style={{
        width: '18rem',
      }}
    >
      <CardTitle tag="h5">{post.title}</CardTitle>
      <CardText>{post.createdAt.toLocaleString()}</CardText>
      <Button color="danger" onClick={() => void deleteHandler(post.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </Button>
    </Card>
  );
}

export default React.memo(PostCard);
