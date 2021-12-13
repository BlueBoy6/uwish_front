import api from 'infra/api';
import { wishesType, wishlistType } from 'types/wishlist';

export function* putWishlist(
  wishlist: wishlistType,
): Generator<any | boolean> {
  try {
    const user_token = sessionStorage.getItem('USER_TOKEN');
    const { data }: any = yield api.put(
      `/wishlists/${wishlist.id}`,
      { data: wishlist },
      { headers: { Authorization: `Bearer ${user_token}` } },
    );
    return data;
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
