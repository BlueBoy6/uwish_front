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

export type wishesType = {
  id: number;
  name: string;
  owner: [];
  type: null;
  url: string;
};
