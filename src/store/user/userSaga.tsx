import { put, takeEvery } from 'redux-saga/effects';
import authenticate from 'infra/authent';

type authentDispatchType = {
  identifier: string;
  password: string;
  navigate: any;
};

type actionType = {
  type: string;
  payload: authentDispatchType;
};

type payloadAuthenticateType = {
  jwt: string;
  user: any;
};

function* authenticateSaga(action: actionType): Generator {
  const auth = yield authenticate({
    identifier: action.payload.identifier,
    password: action.payload.password,
  });
  if (auth) {
    const navigate = action.payload.navigate;
    sessionStorage.setItem('USER_TOKEN', (auth as payloadAuthenticateType).jwt);
    yield put({ type: 'user/authenticate', payload: { auth, navigate } });
  }
}

export function* watchAuthenticateAsync() {
  yield takeEvery('user/call-authenticate', authenticateSaga);
}
