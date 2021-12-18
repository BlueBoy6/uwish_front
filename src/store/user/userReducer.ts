import { authenticate, updateUserWishlists } from 'store/user/userActions';
import { persist } from 'store/persist';

const userState = {
  ...persist(null, 'user'),
} as userStateType;

export type userStateType = {
  user: null;
  groups: null;
  wishlists: null;
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
    default:
      return state;
  }
}
