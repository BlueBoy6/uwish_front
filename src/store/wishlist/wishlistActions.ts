import { wishlistType } from 'types/wishlist';

export function getWishlistData(state: wishlistType, payload: any) {
  return payload;
}

export function addAWish(state: wishlistType, payload: any) {
  console.log('state', state)
  const newState = state;
  newState['wishes'] = [...state.wishes, payload]
  console.log('payload :', payload)
  console.log('newState :', newState)
  return newState;
}