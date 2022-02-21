import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    item: {
      name: '',
      enter: '',
      expire: '',
    },
  },
  // 액션에 따라 api통신 후 돌려받은 데이터를 가공하여 스토어에 상태를 반영한다.
  reducers: {
    itemSet: (state, action) => {
      state.item = action.payload;
    },
    itemsSet: (state, action) => {
      state.items = action.payload;
    },
    itemsCreate: (state, action) => {
      state.items.push({
        name: action.payload.name,
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(2, 'weeks').format('YYYY-MM-DD'),
      });
    },
    itemsRead: (state, action) => {
      state.items = action.payload;
    },
    itemsDelete(state, action) {
      state.items.splice(action.payload, 1);
    },
    itemsUpdate: (state, action) => {
      state.items[action.payload.index] = action.payload.item;
    },
  },
});

export const stateItems = (state) => state.items;
export const actionsItems = itemsSlice.actions;

export default itemsSlice.reducer;
