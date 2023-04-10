import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import type { PostType } from '../../types/postTypes';
import PostCard from './PostCard';
import { PostContext } from '../../contexts/postContext';

type PostsListProps = {
  //   posts: PostType[];
  //   deleteHandler: (postId: PostType['id']) => Promise<void>;
};

export default function PostsList(): JSX.Element {
  const { posts } = useContext(PostContext)!;
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
