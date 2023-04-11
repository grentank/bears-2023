export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: Date;
};

export type PostTypeContextValue = {
  posts: PostType[];
};
