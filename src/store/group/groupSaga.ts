import { put, takeEvery } from 'redux-saga/effects';
import getGroup from 'infra/group';
import { getWishlistsFromIds } from 'infra/wishlists';
import { createNewGroup } from 'infra/groups';

function* getGroupSaga(action: any): Generator {
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

function* createNewGroupSaga(action: any): Generator {

  const group = yield createNewGroup(action.payload);
  console.log('group', group)
  if (group) {
    yield put({
      type: 'user/store-new-group',
      payload: group,
    });
  }
}

export function* watchGroupAsync() {
  yield takeEvery('group/async-get-group', getGroupSaga);
  yield takeEvery('group/async-get-wishlists', getWishlistsOfGroup);
  yield takeEvery('group/async-create-new-group', createNewGroupSaga)
}
