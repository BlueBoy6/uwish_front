import { userStateType } from 'store/user/userReducer';
import { nameAppKey } from 'store/persist';

export function authenticate(state: userStateType, payload: any) {
  const newState = { ...payload };
  sessionStorage.setItem(`${nameAppKey}_user`, JSON.stringify(newState));
  return newState;
}


export function updateUserWishlists(state: userStateType, wishlists: any) {
  const newState = { ...state };
  newState['wishlists'] = wishlists;
  return newState;
}

export function addNewUserWishlist(state: userStateType, wishlists: any) {
  const newState = { ...state };
  if (Array.isArray(newState.wishlists)) {
    newState['wishlists'] = [...newState.wishlists, wishlists];
  }
  return newState
}

export function updateWishesWhereUserIsParticipant(
  state: userStateType,
  payload: any,
) {
  const newState = { ...state };
  newState['wishesParticipant'] = payload;
  return newState;
}

export function updateUserGroup(state: userStateType, newGroup: any) {
  const newState = { ...state };
  console.log('newGroup : ', newGroup);
  if (Array.isArray(newState.groups)) {
    newState['groups'] = [...newState.groups, newGroup];
  }
  return newState;
}
