import { createContext } from 'react';
import type { PostTypeContextValue } from '../../types/postTypes';

const PostContext = createContext<PostTypeContextValue | null>(null);

export default PostContext;
