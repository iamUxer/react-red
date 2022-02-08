import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import itemsReducer from './items/itemsSlice.js';
import { takeEveryItems } from './items/itemsActions.js';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(function* () {
  yield all([takeEveryItems()]);
});
