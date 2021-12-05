import { put, takeEvery } from 'redux-saga/effects';
import getGroup from 'infra/group';

function* getGroupSaga(action: any): Generator {
  const group = yield getGroup(action.payload);
  if (group) {
    yield put({
      type: 'group/get-group',
      payload: { ...(group as any) },
    });
  }
}

export function* watchGroupAsync() {
  yield takeEvery('group/async-get-group', getGroupSaga);
}
