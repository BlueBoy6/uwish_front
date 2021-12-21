import { put, takeEvery } from 'redux-saga/effects';
import { putWish } from 'infra/wish';
import { fetchWishlistFromId } from 'infra/wishlist';

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
  console.log('la wishlop', wishlist);
}

export function* watchWishlistAsync() {
  yield takeEvery('wishlist/async-add-participant', toggleParticipant);
  yield takeEvery('wishlist/async-fetch-datas', fetchWishlistSaga);
}

type actionTyped = {
  type: string;
  payload: any;
};
