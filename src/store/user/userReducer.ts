import { authenticate } from 'store/user/userActions';
import {persist} from 'store/persist';

const userState = {
  ...persist(null, 'user'),
} as userStateType;

export type userStateType = {
  user: null;
  groups: null,
  wishlists: null
};

const disconnect = () => {
  console.log('no more user');
  return null
}

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case 'user/authenticate':
      return authenticate(state, action.payload);
    case 'user/disconnect':
      return disconnect();
    default:
      return state;
  }
}
