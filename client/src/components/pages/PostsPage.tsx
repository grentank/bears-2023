import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import PostForm from '../ui/PostForm';
import type { PostType } from '../../types/postTypes';
import PostsList from '../ui/PostsList';
import hashPosts from '../../utils/hashPosts';
import PostContextProvider from '../../contexts/postContext';

export default function PostsPage(): JSX.Element {
  return (
    <PostContextProvider>
      <>
        <PostForm />
        <PostsList />
      </>
    </PostContextProvider>
  );
}
