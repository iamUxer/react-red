import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    itemSet: (state, action) => {
      state.item = action.payload;
    },
    itemsCreate: (state, action) => {
      state.items.push(action.payload);
    },
    // itemsRead: (state) => {
    //   state.items.push({
    //     name: 'Apple',
    //     enter: 2022-02-07,
    //     expire: 2022-02-21,
    //   }, {
    //     name: 'Mango',
    //     enter: 2022-02-07,
    //     expire: 2022-02-21,
    //   });
    // },
    // itemsSet: (state, action) => {
    //   state.items = action.payload;
    // },
    // itemsUpdate: (state, action) => {
    //   state.items[action.payload.index] = action.payload.item;
    // },
    // itemsDelete(state, action) {
    //   state.items.splice(action.payload, 1);
    // },
  },
});

export const stateItems = (state) => state.items;
export const actionsItems = itemsSlice.actions;

export default itemsSlice.reducer;
