import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { LoggedType, UserFromBackend, UserType } from '../../types/userTypes';
import UserContext from './userContext';

type UserContextProviderProps = {
  children: JSX.Element;
};

export default function UserContextProvider({ children }: UserContextProviderProps): JSX.Element {
  const [user, setUser] = useState<UserType>({ status: 'fetching' });

  useEffect(() => {
    axios<UserFromBackend>('/auth/check')
      .then(({ data }) => setUser({ ...data, status: 'logged' }))
      .catch(() => setUser({ status: 'guest' }));
  }, []);

  const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    axios
      .post<UserFromBackend>('/auth/login', formData)
      .then(({ data }) => setUser({ ...data, status: 'logged' }))
      .catch(console.log);
  };

  const logoutHandler = (): void => {
    axios('/auth/logout')
      .then(() => setUser({ status: 'guest' }))
      .catch(console.log);
  };

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
