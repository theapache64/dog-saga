import { all } from 'redux-saga/effects';
import { dogWatcherSaga } from './DogSaga';

export function* rootSaga() {
  yield all([
    dogWatcherSaga()
  ]);
}