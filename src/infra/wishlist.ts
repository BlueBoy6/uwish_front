import api from 'infra/api';
import { wishlistType } from 'types/wishlist';


export function* putWishlist(idWishlist: number | string, wishlist: wishlistType): Generator<any | boolean> {
  try {
    const user_token = sessionStorage.getItem('USER_TOKEN');
    const {data}: any = yield api.put(`/wishlists/${idWishlist}`, { headers : {Authorization: `Bearer ${user_token}`} } ) || {data: wishlist} ;    
    return data;
  } catch (err: any) {
    console.error('Ah shit bro, authent failed : ', err.message);
    return false;
  }
}
