import type { PostType } from './postTypes';

export type DeleteHandlerType = (postId: PostType['id']) => Promise<void>;

export type AddPostHandlerType = (
  e: React.FormEvent<HTMLFormElement>,
  input: PostType['title'],
) => Promise<void>;

export type PostTypeContextValue = {
  deleteHandler: DeleteHandlerType;
  addPostHandler: AddPostHandlerType;
  posts: PostType[];
};
