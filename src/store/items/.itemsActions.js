import { put, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsItems } from './itemsSlice.js';

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
  });

  const itemsRead$ = function* () {
    yield put(actionsItems.itemsRead());
  };
  yield takeEvery(itemsRead, itemsRead$);

  yield takeEvery(itemsUpdate, function* (action) {
    yield put(actionsItems.itemsUpdate(action.payload));
  });

  yield takeEvery(itemsDelete, function* (action) {
    yield put(actionsItems.itemsDelete(action.payload));
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
