import axios from 'axios';
import { axiosError } from '../common.js';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsMembers } from './membersSlice.js';

const axiosDefaultsHeaders = function (token) {
  if (token) {
    localStorage.setItem('x-jwt-token', token);
    axios.defaults.headers.common['x-jwt-token'] = token;
  } else if (localStorage.getItem('x-jwt-token')) {
    axios.defaults.headers.common['x-jwt-token'] =
      localStorage.getItem('x-jwt-token');
  }
};
// membersLogin dispatch가 일어나고 membersActions.js 페이지가 로딩되면서 즉시 실행
axiosDefaultsHeaders();

// 콤포넌트에서 불려지고 콤포넌트에 의해 실행되는 액션 함수
export const memberSet = createAction('memberSet', (payload) => {
  return { payload: payload };
});
export const membersRead = createAction('membersRead', (payload) => {
  return { payload: payload };
});
export const membersLogin = createAction('membersLogin', (payload) => {
  return { payload: payload };
});
export const membersLoginCheck = createAction(
  'membersLoginCheck',
  (payload) => {
    return { payload: payload };
  }
);

// 위의 액션 함수가 dispatch되면 아래의 saga가 take하여 reducer를 실행한다.
export function* takeEveryMembers() {
  // yield: promise가 끝날때까지 saga를 일시 정지 시킨다.
  yield takeEvery(memberSet, function* (action) {
    yield put(actionsMembers.memberSet(action.payload));
    // put: reducer의 memberSet 액션을 dispatch한다.
  });

  yield takeEvery(membersLogin, function* (action) {
    // dispatch로 인해 membersLogin액션 함수가 실행되고 콤포넌트에서 보내준 action(payload)을 받는다.
    // Validate
    const { member, navigate } = action.payload;
    if (!member.name) {
      alert('이름을 입력해 주세요.');
      return;
    } else if (!member.age) {
      alert('패스워드를 입력해 주세요.');
      return;
    }
    try {
      const response = yield call(
        // call: 실행 명령
        () => axios.post('http://localhost:3100/api/v1/members/login', member)
        // 콤포넌트에서 받은 action의 payload값으로 post Api 통신을 한다.
      );
      axiosDefaultsHeaders(response.data.token);
      // token데이터가 있을때만 response해준다.
      console.log('Done membersLogin', response);
      navigate(`/members`);
    } catch (error) {
      axiosError(error);
      alert(error?.response?.data?.message);
    }
  });

  yield takeEvery(membersLoginCheck, function* (action) {
    // dispatch로 인해 membersLogin액션 함수가 실행되고 콤포넌트에서 보내준 action(payload)을 받는다.

    try {
      const response = yield call(
        // call: 실행 명령
        () => axios.get('http://localhost:3100/api/v1/members/login')
        // 콤포넌트에서 받은 action의 payload값으로 post Api 통신을 한다.
      );
      yield put(actionsMembers.memberSet({ name: response.data.name }));
      console.log('Done membersLoginCheck', response);
    } catch (error) {
      axiosError(error);
    }
  });

  const membersRead$ = function* (action) {
    const orderByName = action.payload?.orderByName || 'name';
    const orderByType = action.payload?.orderByType || 'asc';
    try {
      const response = yield call(() =>
        axios.get(
          `http://localhost:3100/api/v1/members?orderByName=${orderByName}&orderByType=${orderByType}`
        )
      );
      yield put(actionsMembers.membersRead(response.data.members));
      // membersRead 리듀서에 db에서 받아온 members들을 보낸다.
    } catch (error) {
      axiosError(error);
    }
  };

  yield takeEvery(membersRead, membersRead$);
}

const actions = {
  memberSet,
  membersRead,
  membersLogin,
  membersLoginCheck,
};

export default actions;
