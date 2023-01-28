import { takeEvery, all, takeLatest, take } from 'redux-saga/effects'
import { getTodos } from './handlers/dummySaga';

function* helloSaga() {
    console.log('Hello Sagas!')
  }
  
  
  function* watchTodoSaga() {
    yield takeEvery('FETCH_TODOS', getTodos)
  }

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchTodoSaga()
    ])
  }