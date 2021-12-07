import { put, takeEvery } from 'redux-saga/effects';
// import { putWishlist } from 'infra/wishlist';

function* putWishlistSaga(action: any): Generator {
    console.log('action :', action)
//   const wishlist = yield putWishlist(5, action.payload.wishlist);
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
