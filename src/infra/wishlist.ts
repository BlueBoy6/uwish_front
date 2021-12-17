import api from 'infra/api';
import { wishlistType } from 'types/wishlist';

export function* putWishlist(
  wishlist: wishlistType,
): Generator<any | boolean> {
  try {
    const { data }: any = yield api.put(
      `/wishlists/${wishlist.id}`,
      { data: wishlist },
    );
    return data;
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
