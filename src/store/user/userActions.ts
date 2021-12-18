import { userStateType } from 'store/user/userReducer';
import { nameAppKey } from 'store/persist';

export function authenticate(state: userStateType, payload: any) {
  const newState = { ...payload };
  sessionStorage.setItem(`${nameAppKey}_user`, JSON.stringify(newState));
  return newState;
}

export function updateUserWishlists(state: userStateType, payload: any) {
  const newState = { ...state };
  newState['wishlists'] = payload;
  return newState;
}
