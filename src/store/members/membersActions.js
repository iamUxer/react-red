import axios from 'axios';
import { axiosError } from '../common.js';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsMembers } from './membersSlice.js';

// 콤포넌트에서 불려지고 콤포넌트에 의해 실행되는 액션 함수
export const memberSet = createAction('memberSet', (payload) => {
  return { payload: payload };
});
export const membersLogin = createAction('membersLogin', (payload) => {
  return { payload: payload };
});

export function* takeEveryMembers() {
  yield takeEvery(memberSet, function* (action) {
    yield put(actionsMembers.memberSet(action.payload));
  });

  yield takeEvery(membersLogin, function* (action) {
    // dispatch로 인해 membersLogin액션 함수가 실행되고 콤포넌트에서 보내준 action을 받는다.
    // Validate
    const member = action.payload;
    if (!member.name) {
      alert('이름을 입력해 주세요.');
      return;
    } else if (!member.age) {
      alert('패스워드를 입력해 주세요.');
      return;
    }
    try {
      const response = yield call(
        () =>
          axios.post(
            'http://localhost:3100/api/v1/members/login',
            action.payload
          )
        // 콤포넌트에서 받은 action의 payload값으로 post Api 통신을 한다.
      );
      console.log('Done membersLogin', response);
    } catch (error) {
      axiosError(error);
    }
  });
}

const actions = {
  memberSet,
  membersLogin,
};

export default actions;
