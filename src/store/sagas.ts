import { all } from 'redux-saga/effects';
import { watchAuthenticateAsync } from './user/userSaga';
import { watchGroupAsync } from './group/groupSaga';
import { watchWishlistAsync } from './wishlist/wishlistSaga';

export function* rootSaga() {
  yield all([ watchAuthenticateAsync(), watchGroupAsync(), watchWishlistAsync()]);
}
