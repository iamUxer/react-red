import { createSlice } from '@reduxjs/toolkit';

export const membersSlice = createSlice({
  name: 'members',
  initialState: {
    member: {
      name: '',
      age: '',
    },
  },
  // 액션에 따라 api통신 후 돌려받은 데이터를 가공하여 스토어에 상태를 반영한다.
  reducers: {
    memberSet: (state, action) => {
      state.member = action.payload;
    },
  },
});

export const stateMembers = (state) => state.members;
export const actionsMembers = membersSlice.actions;

export default membersSlice.reducer;
