import { userApiType } from './authent';

export type groupType = {
  name: string;
  owner: userApiType;
  members: userApiType[];
};
