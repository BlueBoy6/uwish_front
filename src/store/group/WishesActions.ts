import { wishesType, wishlistType } from 'types/wishlist';

export const updateWishInWishlistOfGroup = (state: any, payload: any) => ({
  ...state,
  wishlists: state.wishlists.map((wishlist: wishlistType) => ({
    ...wishlist,
    wishes: wishlist.wishes.map((wish: wishesType) => {
      if (wish.id === payload.id) return payload;
      return wish;
    }),
  })),
});
