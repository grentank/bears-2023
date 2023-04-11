export type LoggedType = UserFromBackend & {
  status: 'logged';
};

export type FetchingUserType = {
  status: 'fetching';
};

export type GuestType = {
  status: 'guest';
};

export type UserType = GuestType | FetchingUserType | LoggedType;

export type LoginHandlerType = (e: React.FormEvent<HTMLFormElement>) => void;

export type LogoutHandlerType = () => void;

export type UserContextValue = {
  user: UserType;
  loginHandler: LoginHandlerType;
  logoutHandler: LogoutHandlerType;
};

export type UserFromBackend = {
  id: number;
  email: string;
  name: string;
};
