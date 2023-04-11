import { createContext } from 'react';
import type { UserContextValue } from '../../types/userTypes';

const UserContext = createContext<UserContextValue | null>(null);

export default UserContext;
