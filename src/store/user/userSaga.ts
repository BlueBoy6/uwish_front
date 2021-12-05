import { put, takeEvery } from 'redux-saga/effects';
import authenticate from 'infra/authent';
import {actionType, payloadAuthenticateType} from 'types/authent'

function* authenticateSaga(action: actionType): Generator {
  const auth = yield authenticate({
    identifier: action.payload.identifier,
    password: action.payload.password,
  });
  if (auth) {
    sessionStorage.setItem('USER_TOKEN', (auth as payloadAuthenticateType).jwt);
    yield put({ type: 'user/authenticate', payload: { ...(auth as payloadAuthenticateType) } });
  }
}

export function* watchAuthenticateAsync() {
  yield takeEvery('user/async-authenticate', authenticateSaga);
}
