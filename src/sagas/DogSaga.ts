import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_FAILURE } from '../reducers/DogReducer';

export function* dogWatcherSaga() {
  yield takeLatest(FETCH_DOG_REQUEST, dogWorkerSaga);
}

function* dogWorkerSaga() {
  console.log('Worker invoked');

  const response = yield call(fetchDog);
  if (response != null) {
    const dog = response.message;
    yield put({ type: FETCH_DOG_SUCCESS, payload: { dog } })
  }
}

function* fetchDog() {
  try {
    console.log('Fetching dog');
    const response = yield fetch('https://dog.ceo/api/breeds/image/random');
    const responseJson = yield response.json()
    console.log('A', responseJson);
    return responseJson;
  } catch (error) {
    yield put({ type: FETCH_DOG_FAILURE });
    return null;
  }
}