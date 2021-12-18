import api from 'infra/api';
import { flatResponseFromApi } from 'helpers/flatResponseFromApi';

export function* getWishlistsFromIds(
  wishlistIds: number[],
): Generator<any | boolean> {
  try {
    const { data }: any = yield api.get(
      `/wishlists?filters[group][id]=${wishlistIds}&populate=*`,
    );
    return flatResponseFromApi(data.data);
  } catch (err: any) {
    console.error('Ah shit bro, getWishlistsFromIds failed : ', err.message);
    return false;
  }
}

export function* getWishlistsOfUser(
  userId: number
): Generator<any | boolean> {
  try {
    const { data }: any = yield api.get(
      `/wishlists?filters[caller][id][$eq]=${userId}&populate=*`,
    );
    return flatResponseFromApi(data.data);
  } catch (err: any) {
    console.error('Ah shit bro, getWishlistsOfUser failed : ', err.message);
    return false;
  }
}
