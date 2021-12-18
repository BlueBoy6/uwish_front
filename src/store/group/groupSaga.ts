import { put, takeEvery } from 'redux-saga/effects';
import getGroup from 'infra/group';
import { getWishlistsFromIds } from 'infra/wishlists';
import { actionType } from 'types/authent';

function* getGroupSaga(action: actionType): Generator {
  const group = yield getGroup(action.payload);
  if (group) {
    yield put({
      type: 'group/get-group',
      payload: { ...(group as any) },
    });
  }
}

function* getWishlistsOfGroup(action: any): Generator {
  const wishlists = yield getWishlistsFromIds(action.payload);
  if (wishlists) {
    yield put({
      type: 'group/get-wishlists',
      payload: wishlists,
    });
  }
}

export function* watchGroupAsync() {
  yield takeEvery('group/async-get-group', getGroupSaga);
  yield takeEvery('group/async-get-wishlists', getWishlistsOfGroup);
}
