import { put, takeEvery } from 'redux-saga/effects';
import authenticate from 'infra/authent';
import {
  actionType,
  payloadAuthenticateType,
  userStoreType,
} from 'types/authent';
import getGroupsOfUser from 'infra/groups';
import { getWishlistsOfUser } from 'infra/wishlists';

function* authenticateSaga(action: actionType): Generator {
  const { password, identifier } = action.payload;
  const user = yield authenticate({
    identifier,
    password,
  }) as userStoreType | unknown;
  if (user) {
    sessionStorage.setItem('USER_TOKEN', (user as payloadAuthenticateType).jwt);
    const userGroups = yield getGroupsOfUser((user as userStoreType).id);
    yield put({
      type: 'user/authenticate',
      payload: { user, groups: userGroups },
    });
  }
}

function* getUserWishlists(action: any): Generator {
  const wishlists = yield getWishlistsOfUser(action.payload.userId);
  console.log({ wishlists });
  if (wishlists) {
    yield put({ type: 'user/get-user-wishlists', payload: wishlists });
  }
}

export function* watchAuthenticateAsync() {
  yield takeEvery('user/async-authenticate', authenticateSaga);
  yield takeEvery('user/async-get-user-wishlists', getUserWishlists);
}
