import axios from 'axios';
import { axiosError } from '../common.js';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsGroceries } from './groceriesSlice.js';

// 콤포넌트에서 불려지고 콤포넌트에 의해 실행되는 액션 함수
export const grocerySet = createAction('grocerySet', (payload) => {
  return { payload: payload };
});
export const groceriesSet = createAction('groceriesSet', (payload) => {
  return { payload: payload };
});
export const groceriesCreate = createAction('groceriesCreate', (payload) => {
  return { payload: payload };
});
export const groceriesRead = createAction('groceriesRead', (payload) => {
  return { payload: payload };
});
export const groceriesUpdate = createAction('groceriesUpdate', (payload) => {
  return { payload: payload };
});
export const groceriesDelete = createAction('groceriesDelete', (payload) => {
  return { payload: payload };
});

export function* takeEveryGroceries() {
  yield takeEvery(grocerySet, function* (action) {
    yield put(actionsGroceries.grocerySet(action.payload));
  });

  // groceriesSet
  yield takeEvery(groceriesSet, function* (action) {
    yield put(actionsGroceries.groceriesSet(action.payload));
  });

  yield takeEvery(groceriesCreate, function* (action) {
    // dispatch로 인해 groceriesCreate액션 함수가 실행되고 콤포넌트에서 보내준 action을 받는다.
    try {
      const response = yield call(
        () =>
          axios.post(`http://localhost:3100/api/v1/groceries/${action.payload}`)
        // 콤포넌트에서 받은 action의 payload값으로 post Api 통신을 한다.
      );
      console.log('Done groceriesCreate', response);
      yield groceriesRead$();
    } catch (error) {
      axiosError(error);
    }
  });

  // 다른 함수 안에서 불러지는 함수를 구분하기 위해 특수문자를 사용했다.
  const groceriesRead$ = function* (action) {
    console.log({ action });
    try {
      const response = yield call(() =>
        axios.get(
          `http://localhost:3100/api/v1/groceries?orderByName=${action.payload.orderByName}&orderByType=${action.payload.orderByType}`
        )
      );
      console.log('Done groceriesRead', response);
      yield put(actionsGroceries.groceriesRead(response.data.groceries));
      // groceriesRead 리듀서에 db에서 받아온 groceries들을 보낸다.
    } catch (error) {
      axiosError(error);
    }
  };

  yield takeEvery(groceriesRead, groceriesRead$);

  yield takeEvery(groceriesUpdate, function* (action) {
    try {
      const response = yield call(() =>
        axios.patch(
          'http://localhost:3100/api/v1/groceries/' +
            action.payload.grocery.grocery_pk,
          action.payload.grocery
        )
      );
      console.log('Done groceriesUpdate', response);
      yield groceriesRead$();
    } catch (error) {
      axiosError(error);
    }
  });

  yield takeEvery(groceriesDelete, function* (action) {
    try {
      const response = yield call(() =>
        axios.delete('http://localhost:3100/api/v1/groceries/' + action.payload)
      );
      console.log('Done groceriesUpdate', response);
      yield groceriesRead$();
    } catch (error) {
      axiosError(error);
    }
  });
}

const actions = {
  grocerySet,
  groceriesSet,
  groceriesCreate,
  groceriesRead,
  groceriesUpdate,
  groceriesDelete,
};

export default actions;
