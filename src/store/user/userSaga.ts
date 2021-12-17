import { put, takeEvery } from 'redux-saga/effects';
import authenticate from 'infra/authent';
import {actionType, payloadAuthenticateType, userStoreType} from 'types/authent'
import getGroupsOfUser from 'infra/groups';


function* authenticateSaga(action: actionType): Generator {
  const user = yield authenticate({
    identifier: action.payload.identifier,
    password: action.payload.password,
  }) as userStoreType | unknown;
  if (user) {
    sessionStorage.setItem('USER_TOKEN', (user as payloadAuthenticateType).jwt);
    const userGroups = yield getGroupsOfUser((user as userStoreType).id);
    yield put({ type: 'user/authenticate', payload: { user, groups: userGroups } });
  }
}

export function* watchAuthenticateAsync() {
  yield takeEvery('user/async-authenticate', authenticateSaga);
}
