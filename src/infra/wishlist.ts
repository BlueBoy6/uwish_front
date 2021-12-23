import api from 'infra/api';
import { wishlistType } from 'types/wishlist';
import { flatResponseFromApi } from 'helpers/flatResponseFromApi';

export function* putWishlist(wishlist: wishlistType): Generator<any | boolean> {
  try {
    const { data }: any = yield api.put(`/wishlists/${wishlist.id}`, {
      data: wishlist,
    });
    return data;
  } catch (err: any) {
    console.error('Ah shit bro, put wishlists failed : ', err.message);
    return false;
  }
}

export function* fetchWishlistFromId(id: Number): Generator<any> {
  try {
    const wishlist: any = yield api.get(`/wishlists/${id}?populate=*`);
    return flatResponseFromApi(wishlist.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, fetch wishlist failed : ', err.message);
    return false;
  }
}

export function* postNewWishlist(wishlist: any): Generator<any | boolean> {
  console.log('wishlist', wishlist);
  try {
    if (wishlist) {
      const newWishlist = yield api.post(`/wishlists`, {
        data: {
          ...wishlist,
        },
      }) || { data: null };
      return flatResponseFromApi((newWishlist as any).data.data);
    }
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
