import api from 'infra/api';
import { flatResponseFromApi } from 'helpers/flatResponseFromApi';

export function* getWishlistsFromIds(
  wishlistIds: number[],
): Generator<any | boolean> {
  try {
    const user_token = sessionStorage.getItem('USER_TOKEN');
    const { data }: any = yield api.get(
      `/wishlists?filters[group][id]=${wishlistIds}&populate=*`,
      { headers: { Authorization: `Bearer ${user_token}` } },
    );
    return flatResponseFromApi(data.data);
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}

