import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import type { PostType } from '../../types/postTypes';
import PostContext from './postContext';
import HandlersContext from '../handlers/handlersContext';

type PostContextProviderProps = {
  children: JSX.Element;
};

export default function PostContextProvider({ children }: PostContextProviderProps): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios<PostType[]>('/posts')
      .then(({ data }) => setPosts(data))
      .catch(console.log);
  }, []);

  const addPostHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    input: PostType['title'],
  ): Promise<void> => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    const response = await axios.post<PostType>('/posts', {
      title: input,
    });
    if (response.status === 200) {
      setPosts((prev) => [response.data, ...prev]);
    }
  };

  const deleteHandler = useCallback(async (postId: PostType['id']): Promise<void> => {
    const response = await axios.delete(`/posts/${postId}`);
    if (response.status === 200) {
      setPosts((prev) => prev.filter((post) => post.id !== postId));
    }
  }, []);

  // const hash = useMemo(() => hashPosts(posts), []);

  // useCallback(fn) <=> useMemo(() => fn)

  const handlersValue = useMemo(
    () => ({
      deleteHandler,
      addPostHandler,
    }),
    [],
  );

  return (
    <HandlersContext.Provider value={handlersValue}>
      {/*
       eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
    </HandlersContext.Provider>
  );
}
