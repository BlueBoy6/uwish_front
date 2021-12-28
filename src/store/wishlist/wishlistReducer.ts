import { persist } from 'store/persist';
import { wishlistType } from 'types/wishlist';
import { getWishlistData } from './wishlistActions';

const wishlist = {
  ...persist(null, 'wishlist'),
} as wishlistType;

export function wishlistReducer(state = wishlist, action: any) {
  switch (action.type) {
    case 'wishlist/get-wishlist':
      return getWishlistData(state, action.payload);
    case 'wishlist/clean': return {};
    default:
      return state;
  }
}
