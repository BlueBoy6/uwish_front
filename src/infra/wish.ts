import { flatResponseFromApi } from 'helpers/flatResponseFromApi';
import api from 'infra/api';
import { wishesType } from 'types/wishlist';

export function* putWish(wish: wishesType): Generator<any | boolean> {
  try {
    const wishUpdated: any = yield api.put(`/wishes/${wish.id}`, {
      data: {
        ...wish,
      },
    }) || { data: null };
    return flatResponseFromApi(wishUpdated.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, put a wish failed : ', err.message);
    return false;
  }
}

export function* postWish(wish: wishesType): Generator<any | boolean> {
  try {
    const wishUpdated: any = yield api.post(`/wishes/`, {
      data: {
        ...wish,
      },
    }) || { data: null };
    return flatResponseFromApi(wishUpdated.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, post a wish failed : ', err.message);
    return false;
  }
}

export function* deleteWish(wish: wishesType): Generator<any | boolean> {
  try {
    const wishUpdated: any = yield api.delete(`/wishes/${wish}`) || { data: null };
    return flatResponseFromApi(wishUpdated.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, delete wish failed : ', err.message);
    return false;
  }
}

export function* saveWish(wish: wishesType): Generator<any | boolean> {
  try {
    const wishUpdated: any = yield api.put(`/wishes/${wish.id}`, {
      data: {
        ...wish,
      },
    }) || { data: null };
    return flatResponseFromApi(wishUpdated.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, delete wish failed : ', err.message);
    return false;
  }
}
