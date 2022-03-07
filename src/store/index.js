import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import itemsReducer from './items/itemsSlice.js';
import { takeEveryItems } from './items/itemsActions.js';
import groceriesReducer from './groceries/groceriesSlice.js';
import { takeEveryGroceries } from './groceries/groceriesActions.js';
import membersReducer from './members/membersSlice.js';
import { takeEveryMembers } from './members/membersActions.js';

// root reducer
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    items: itemsReducer,
    groceries: groceriesReducer,
    members: membersReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(function* () {
  yield all([takeEveryItems(), takeEveryGroceries(), takeEveryMembers()]);
});
