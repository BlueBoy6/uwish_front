import api from 'infra/api';
import { flatResponseFromApi } from 'helpers/flatResponseFromApi';

export function* getWishesWhereUserIsParticipant(
  userId: number,
): Generator<any | boolean> {
  try {
    const { data }: any = yield api.get(
      `/wishes?filters[participants][$containsi]=${userId}&?populate=*`,
    );
    return flatResponseFromApi(data.data);
  } catch (err: any) {
    console.error('Ah shit bro, getWishlistsOfUser failed : ', err.message);
    return false;
  }
}
