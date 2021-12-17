export type wishlistType = {
  id: number;
  name: string;
  group: number;
  isPublic: string;
  caller: ownerOfWish;
  wishes: wishesType[];
  created_at: string;
  published_at: string;
  updated_at: string;
};
export type ownerOfWish = {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  role: number;
};

export type wishesType = {
  id: number;
  name: string;
  participants:  number[] | null;
  type: null;
  url: string;
  owner: ownerOfWish
};
