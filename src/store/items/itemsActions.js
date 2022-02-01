import { put, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsItems } from './itemsSlice.js';

// import axios from 'axios';
// import { axiosError } from '../common.js';
// import { put, takeEvery, call } from 'redux-saga/effects';

export const itemSet = createAction('itemSet', (payload) => {
  return { payload: payload };
});
export const itemsSet = createAction('itemsSet', (payload) => {
  return { payload: payload };
});
export const itemsCreate = createAction('itemsCreate', (payload) => {
  return { payload: payload };
});
export const itemsRead = createAction('itemsRead', (payload) => {
  return { payload: payload };
});
export const itemsUpdate = createAction('itemsUpdate', (payload) => {
  return { payload: payload };
});
export const itemsDelete = createAction('itemsDelete', (payload) => {
  return { payload: payload };
});

export function* takeEveryItems() {
  yield takeEvery(itemSet, function* (action) {
    yield put(actionsItems.itemSet(action.payload));
  });

  yield takeEvery(itemsSet, function* (action) {
    yield put(actionsItems.itemsSet(action.payload));
  });

  yield takeEvery(itemsCreate, function* (action) {
    yield put(actionsItems.itemsCreate(action.payload));
    // try {
    //   const response = yield call(() => axios.post('http://localhost:3100/api/v1/items', action.payload));
    //   console.log('Done itemsCreate', response);
    //   yield itemsRead$();
    // } catch(error) {
    //   axiosError(error);
    // }
  });

  const itemsRead$ = function* () {
    yield put(actionsItems.itemsRead());
    // try {
    //   const response = yield call(() => axios.get('http://localhost:3100/api/v1/items'));
    //   console.log('Done itemsRead', response);
    //   yield put(actionsItems.itemsRead(response.data.items));
    // } catch(error) {
    //   axiosError(error);
    // }
  };
  yield takeEvery(itemsRead, itemsRead$);

  yield takeEvery(itemsUpdate, function* (action) {
    yield put(actionsItems.itemsUpdate(action.payload));
    // try {
    //   const response = yield call(() => axios.patch('http://localhost:3100/api/v1/items/' + action.payload.index, action.payload.item));
    //   console.log('Done itemsUpdate', response);
    //   yield itemsRead$();
    // } catch(error) {
    //   axiosError(error);
    // }
  });

  yield takeEvery(itemsDelete, function* (action) {
    yield put(actionsItems.itemsDelete(action.payload));
    // try {
    //   const response = yield call(() => axios.delete('http://localhost:3100/api/v1/items/' + action.payload));
    //   console.log('Done itemsUpdate', response);
    //   yield itemsRead$();
    // } catch(error) {
    //   axiosError(error);
    // }
  });
}

const actions = {
  itemSet,
  itemsSet,
  itemsCreate,
  itemsRead,
  itemsUpdate,
  itemsDelete,
};

export default actions;
