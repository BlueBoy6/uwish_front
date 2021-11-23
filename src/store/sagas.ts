import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counter/counterSaga';
import { watchAuthenticateAsync } from './user/userSaga';

export function* rootSaga() {
  yield all([watchIncrementAsync(), watchAuthenticateAsync()]);
}
