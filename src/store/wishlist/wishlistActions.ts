import { wishlistType } from 'types/wishlist';

export function getWishlistData(state: wishlistType, payload: any) {
  return payload;
}

export function addAWish(state: wishlistType, payload: any) {


  const newState = {...state, wishes: [...state.wishes, payload]};

  return newState;
}


export function deleteAWish(state: wishlistType, payload: any) {


  const newState = {...state , wishes:state.wishes.filter(wish => wish.id !== payload)};

  return newState;
}

export function updateAWish(state: wishlistType, wish: any) {


  const newState = {
    ...state, wishes: state.wishes.map(actualWish => {
      if (actualWish.id === wish.id) return wish
      return actualWish
    })
  };

  return newState;
}