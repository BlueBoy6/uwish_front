import { put, takeEvery } from 'redux-saga/effects';
import { postWish, putWish } from 'infra/wish';
import { fetchWishlistFromId, postNewWishlist } from 'infra/wishlist';

function* toggleParticipant(action: actionTyped): Generator {
  const participants = action.payload.wish.participants || [];
  let wishUpdated;
  const sameUserId = (id: number) => id === action.payload.userId;
  const notSameUserId = (id: number) => id !== action.payload.userId;
  if (participants.some(sameUserId)) {
    const participantsWithoutTheActualUser = participants.filter(notSameUserId);
    wishUpdated = {
      ...action.payload.wish,
      participants: participantsWithoutTheActualUser,
    };
  } else {
    wishUpdated = {
      ...action.payload.wish,
      participants: [...participants, action.payload.userId],
    };
  }
  const wish = yield putWish(wishUpdated);
  if (wish) yield put({ type: 'group/update-wish', payload: wish });
}

function* fetchWishlistSaga(action: actionTyped): Generator {
  const wishlist = yield fetchWishlistFromId(action.payload.id);
  if (wishlist) {
    yield put({ type: 'wishlist/get-wishlist', payload: wishlist });
  }
}

function* createWishlistSaga(action: actionTyped): Generator {
  const wishlistCreated = yield postNewWishlist(action.payload);
  if (wishlistCreated) {
    yield put({ type: 'user/store-new-wishlist', payload: wishlistCreated });
  }
}

function* postWishSaga(action: actionTyped): Generator {
  const wish = yield postWish(action.payload);
  if (wish) {
    yield put({ type: 'wishlist/add-new-wish', payload: wish });
  }
}

export function* watchWishlistAsync() {
  yield takeEvery('saga/wishlist/add-participant', toggleParticipant);
  yield takeEvery('saga/wishlist/fetch-datas', fetchWishlistSaga);
  yield takeEvery('saga/wishlist/create-wishlist', createWishlistSaga);
  yield takeEvery('saga/wishlist/post-wish', postWishSaga);
}

export type actionTyped = {
  type: string;
  payload: any;
};
