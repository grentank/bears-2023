import React from 'react';
import { Col, Row } from 'reactstrap';
import PostCard from './PostCard';
import usePostContext from '../../contexts/post/hooks';

export default function PostsList(): JSX.Element {
  const { posts } = usePostContext();
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={4} key={post.id}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  );
}
