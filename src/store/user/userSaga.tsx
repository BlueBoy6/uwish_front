import { put, takeEvery } from 'redux-saga/effects';
import authenticate from 'infra/authent';

type authentDispatchType = {
  identifier: string;
  password: string;
  history: any;
};

type actionType = {
  type: string;
  payload: authentDispatchType;
};

function* authenticateSaga(action: actionType): Generator {
  console.log('payload SAGA : ', action);
  const auth = yield authenticate({
    identifier: action.payload.identifier,
    password: action.payload.password,
  });
  const history = action.payload.history;
  console.log("alors l'authent", auth);
  yield put({ type: 'user/authenticate', payload: { auth, history } });
}

export function* watchAuthenticateAsync() {
  yield takeEvery('user/call-authenticate', authenticateSaga);
}
