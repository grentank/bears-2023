import { createContext } from 'react';
import type { CallbackTypeContextValue } from '../../types/callbackTypes';

const HandlersContext = createContext<CallbackTypeContextValue | null>(null);

export default HandlersContext;
