import { useContext } from 'react';
import type { CallbackTypeContextValue } from '../../types/callbackTypes';
import HandlersContext from './handlersContext';

export default function useHandlersContext(): CallbackTypeContextValue {
  const context = useContext(HandlersContext);
  if (!context) throw new Error('useHandlersContext must be called inside it`s provider');
  return context;
}
