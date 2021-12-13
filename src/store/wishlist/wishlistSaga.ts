import { put, takeEvery } from 'redux-saga/effects';
import { putWishlist } from 'infra/wishlist';
import { wishesType } from 'types/wishlist';

function* putWishlistSaga(action: any): Generator {
  console.log('action :', action);
  const wishlistUpdated = {
    ...action.payload.wishlist,
    Wishes: [
      ...action.payload.wishlist.Wishes.map((wish: wishesType) => {
        if (wish.id === action.payload.wish.id)
          return {
            ...wish,
            owner: [...wish.owner, action.payload.user],
          };
        return wish;
      }),
    ],
  };

  console.log('updated :', wishlistUpdated);

  const wishlist = yield putWishlist(
    wishlistUpdated
  );
  //   if (wishlist) {
  //     yield put({
  //       type: 'group/get-group',
  //       payload: { ...(wishlist as any) },
  //     });
  //   }
}

export function* watchWishlistAsync() {
  yield takeEvery('wishlist/async-put-wishlist', putWishlistSaga);
}
