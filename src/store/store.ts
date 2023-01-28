import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


import reducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';


const sagaMiddlware = createSagaMiddleware();


const store = configureStore({reducer,
middleware: [sagaMiddlware], 
})

sagaMiddlware.run(rootSaga);

export default store;