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
  },
});

export const stateItems = (state) => state.items;
export const actionsItems = itemsSlice.actions;

export default itemsSlice.reducer;
