import axios from 'axios';
import { axiosError } from '../common.js';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsItems } from './itemsSlice.js';

// 콤포넌트에서 불려지고 콤포넌트에 의해 실행되는 액션 함수
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

  // itemsSet
  yield takeEvery(itemsSet, function* (action) {
    yield put(actionsItems.itemsSet(action.payload));
  });

  yield takeEvery(itemsCreate, function* (action) {
    // dispatch로 인해 itemsCreate액션 함수가 실행되고 콤포넌트에서 보내준 action을 받는다.
    try {
      const response = yield call(
        () => axios.post('http://localhost:3100/api/v1/items', action.payload)
        // 콤포넌트에서 받은 action의 payload값으로 post Api 통신을 한다.
      );
      console.log('Done itemsCreate', response);
      yield itemsRead$({ type: 'itemsRead' });
    } catch (error) {
      axiosError(error);
    }
  });

  // 다른 함수 안에서 불러지는 함수를 구분하기 위해 특수문자를 사용했다.
  const itemsRead$ = function* (action) {
    const orderByName = action.payload?.orderByName || 'name';
    const orderByType = action.payload?.orderByType || 'asc';
    try {
      const response = yield call(() =>
        axios.get(
          `http://localhost:3100/api/v1/items?orderByName=${orderByName}&orderByType=${orderByType}`
        )
      );
      yield put(actionsItems.itemsRead(response.data.items));
      // itemsRead 리듀서에 db에서 받아온 items들을 보낸다.
    } catch (error) {
      axiosError(error);
    }
  };

  yield takeEvery(itemsRead, itemsRead$);

  yield takeEvery(itemsUpdate, function* (action) {
    try {
      const response = yield call(() =>
        axios.patch(
          'http://localhost:3100/api/v1/items/' + action.payload.item.item_pk,
          action.payload.item
        )
      );
      console.log('Done itemsUpdate', response);
      if (response.status === 200) {
        yield itemsRead$({ type: 'itemsRead' });
      } else {
        throw new Error('error update');
      }
    } catch (error) {
      axiosError(error);
    }
  });

  yield takeEvery(itemsDelete, function* (action) {
    try {
      const response = yield call(() =>
        axios.delete('http://localhost:3100/api/v1/items/' + action.payload)
      );
      console.log('Done itemsDelete', response);
      yield itemsRead$({ type: 'itemsRead' });
    } catch (error) {
      axiosError(error);
    }
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
