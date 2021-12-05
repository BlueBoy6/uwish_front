export type authentDispatchType = {
  identifier: string;
  password: string;
  navigate: any;
};

export type actionType = {
  type: string;
  payload: authentDispatchType;
};

export type userRoleApiType = {
  description: string;
  id: number;
  name: string;
  type: string;
};

export type userApiType = {
  provider: string;
  id: number;
  username: string;
  email: string;
  role: userRoleApiType;
  confirmed: boolean;
  blocked: boolean;
  updated_at: string;
  bands: [];
  wishlists: [];
};

export type payloadAuthenticateType = {
  jwt: string;
  user: userApiType;
};
