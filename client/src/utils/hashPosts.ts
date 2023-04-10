import type { PostType } from '../types/postTypes';

export default function hashPosts(posts: PostType[]): string {
  let counter = 0;
  for (let i = 0; i < 1e8; i += 1) {
    counter += Math.random();
  }
  return `result: ${counter}`;
}
