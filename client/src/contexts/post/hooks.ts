import { useContext } from 'react';
import type { PostTypeContextValue } from '../../types/postTypes';
import PostContext from './postContext';

export default function usePostContext(): PostTypeContextValue {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePostContext must be called inside it`s provider');
  return context;
}
