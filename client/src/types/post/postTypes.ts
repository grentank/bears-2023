import type { UserFromBackend } from '../user/userTypes';

export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: Date;
  User: UserFromBackend;
};

export type PostsSliceType = {
  allPosts: PostType[];
  favorites: PostType[];
};

export type PostForm = {
  title: string;
  body: string;
};
