import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";



export function* getTodos(): SagaIterator {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos/1');
    const todos = yield response.json();
    
    yield put({type: 'GET_TODOS', payload: todos});
}