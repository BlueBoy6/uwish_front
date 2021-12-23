import {
  addNewUserWishlist,
  authenticate,
  updateUserGroup,
  updateUserWishlists,
  updateWishesWhereUserIsParticipant,
} from 'store/user/userActions';
import { persist } from 'store/persist';
import { groupType } from 'types/group';
import { wishlistType } from 'types/wishlist';

const userState = {
  ...persist(null, 'user'),
} as userStateType;

export type userStateType = {
  user: null;
  groups: groupType[] | null;
  wishlists: wishlistType[] | null;
  wishesParticipant: null;
};

const disconnect = () => {
  return null;
};

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case 'user/authenticate':
      return authenticate(state, action.payload);
    case 'user/disconnect':
      return disconnect();
    case 'user/get-user-wishlists':
      return updateUserWishlists(state, action.payload);
    case 'user/get-wishes-where-user-is-participant':
      return updateWishesWhereUserIsParticipant(state, action.payload);
    case 'user/store-new-group':
      return updateUserGroup(state, action.payload);
    case 'user/store-new-wishlist':
      return addNewUserWishlist(state, action.payload);
    default:
      return state;
  }
}
