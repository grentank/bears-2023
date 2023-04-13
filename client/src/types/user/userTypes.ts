export type LoggedType = UserFromBackend & {
  status: 'logged';
};

export type FetchingUserType = {
  status: 'fetching';
};

export type GuestType = {
  status: 'guest';
};

export type IdleType = {
  status: 'idle';
};

export type UserType = GuestType | FetchingUserType | LoggedType | IdleType;

export type UserFromBackend = {
  id: number;
  email: string;
  name: string;
};
