import { flatResponseFromApi } from 'helpers/flatResponseFromApi';
import api from 'infra/api';
import { wishesType } from 'types/wishlist';


export function* putWish(wish: wishesType): Generator<any | boolean> {
  try {
      const wishUpdated: any = yield api.put(`/wishes/${wish.id}`, {
          data: {
            ...wish
        }
    } ) || {data: null} ;    
    return flatResponseFromApi(wishUpdated.data.data);
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
