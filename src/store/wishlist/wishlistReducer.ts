import { persist } from 'store/persist';
import { wishlistType } from 'types/wishlist';
import { addAWish, getWishlistData } from './wishlistActions';

const wishlist = {
  ...persist(null, 'wishlist'),
} as wishlistType;

export function wishlistReducer(state = wishlist, action: any) {
  switch (action.type) {
    case 'wishlist/get-wishlist':
      return getWishlistData(state, action.payload);
    case 'wishlist/clean':
      return {};
    case 'wishlist/add-new-wish':
      return addAWish(state, action.payload);
    default:
      return state;
  }
}
