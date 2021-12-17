import { getGroup, setWishlistsOfGroup } from 'store/group/groupActions';

import { persist } from 'store/persist';
import { updateWishInWishlistOfGroup } from './WishesActions';

const userState = {
  ...persist(null, 'group'),
} as groupStateType;

type groupType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  owner: {};
  members: {}[];
  wishlists: {}[];
};

export type groupStateType = {
  group: groupType | null;
};

const clean = () => {
  console.log('clean and disconnect');
  return {};
};

export function groupReducer(state = userState, action: any) {
  switch (action.type) {
    case 'group/get-group':
      return getGroup(state, action.payload);
    case 'group/update-wish':
      return updateWishInWishlistOfGroup(state, action.payload);
    case 'group/clean':
      return clean();
    case 'group/get-wishlists':
      return setWishlistsOfGroup(state, action.payload);
    default:
      return state;
  }
}
