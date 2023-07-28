import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index.js';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleWare) => {
     return getDefaultMiddleWare({ thunk: false }).prepend(sagaMiddleware);
   }
 });

sagaMiddleware.run(rootSaga);

export default store;