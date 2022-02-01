import axios from 'axios';
import { axiosError } from '../common.js';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsItems } from 'store/items/itemsSlice.js';

export const searchRead = createAction('searchRead', (payload) => {
  return { payload: payload };
});

export function* takeEverySearch() {
  yield takeEvery(searchRead, function* (action) {
    try {
      const response = yield call(() =>
        axios.get(`http://localhost:3100/api/v1/search?q=${action.payload}`)
      );
      console.log('Done searchRead', response);
      yield put(actionsItems.itemsRead(response.data.items));
    } catch (error) {
      axiosError(error);
    }
  });
}

const actions = {
  searchRead,
};

export default actions;
