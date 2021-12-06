export type wishlistType = {
  id: number;
  user: number;
  name: string;
  band: number;
  isPublic: string;
  Wishes: wishesType[];
  created_at: string;
  published_at: string;
  updated_at: string;
};
export type ownerOfWish = {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  role: number
}

export type wishesType = {
  id: number;
  name: string;
  owner: ownerOfWish[];
  type: null;
  url: string;
};

