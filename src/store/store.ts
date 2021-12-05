import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { userReducer } from 'store/user/userReducer';
import { groupReducer } from './group/groupReducer';
import { rootSaga } from './sagas';

export function useReduxStore() {
  const sagaMiddleware = createSagaMiddleware();
  // const logger = createLogger();
  const rootReducer = combineReducers({
    user: userReducer,
    group: groupReducer
  });
  // const enhancers = applyMiddleware(logger, sagaMiddleware);
  const enhancers = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
