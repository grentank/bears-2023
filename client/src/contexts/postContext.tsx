import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import type { PostTypeContextValue } from '../types/callbackTypes';
import type { PostType } from '../types/postTypes';

export const PostContext = createContext<PostTypeContextValue | null>(null);

type PostContextProviderProps = {
  children: JSX.Element;
};

export default function PostContextProvider({ children }: PostContextProviderProps): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios<PostType[]>('http://localhost:3001/api/posts')
      .then(({ data }) => setPosts(data))
      .catch(console.log);
  }, []);

  const addPostHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    input: PostType['title'],
  ): Promise<void> => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    const response = await axios.post<PostType>('http://localhost:3001/api/posts', {
      title: input,
    });
    if (response.status === 200) {
      setPosts((prev) => [response.data, ...prev]);
    }
  };

  const deleteHandler = useCallback(async (postId: PostType['id']): Promise<void> => {
    const response = await axios.delete(`http://localhost:3001/api/posts/${postId}`);
    if (response.status === 200) {
      setPosts((prev) => prev.filter((post) => post.id !== postId));
    }
  }, []);

  // const hash = useMemo(() => hashPosts(posts), []);

  return (
    <PostContext.Provider
      value={{
        deleteHandler,
        addPostHandler,
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
