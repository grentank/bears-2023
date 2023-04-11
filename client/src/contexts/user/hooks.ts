import { useContext } from 'react';
import type { UserContextValue } from '../../types/userTypes';
import UserContext from './userContext';

export default function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be called inside it`s provider');
  return context;
}
