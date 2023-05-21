export type UserType = {
  name: string;
  email: string;
};

export type AuthType = {
  isAuthenticated: boolean;
  token: string | null;
  userData?: UserType;
};
