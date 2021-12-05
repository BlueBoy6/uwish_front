import { all } from 'redux-saga/effects';
import { watchAuthenticateAsync } from './user/userSaga';
import { watchGroupAsync } from './group/groupSaga';

export function* rootSaga() {
  yield all([ watchAuthenticateAsync(), watchGroupAsync()]);
}
