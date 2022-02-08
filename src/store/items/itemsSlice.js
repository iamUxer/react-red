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
  reducers: {
    itemSet: (state, action) => {
      state.item = action.payload;
    },
    itemsCreate: (state, action) => {
      state.items.push({
        name: action.payload.name,
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(2, 'weeks').format('YYYY-MM-DD'),
      });
    },
    itemsRead: (state) => {
      state.items.push(
        {
          name: 'Apple',
          enter: '2022-02-07',
          expire: '2022-02-21',
        },
        {
          name: 'Mango',
          enter: '2022-02-07',
          expire: '2022-02-21',
        }
      );
    },
    itemsDelete(state, action) {
      state.items.splice(action.payload, 1);
    },
    // itemsSet: (state, action) => {
    //   state.items = action.payload;
    // },
    itemsUpdate: (state, action) => {
      state.items[action.payload.index] = action.payload.item;
    },
  },
});

// Axios
// itemsRead: (state, action) => {
//   state.items = action.payload;
// },

export const stateItems = (state) => state.items;
export const actionsItems = itemsSlice.actions;

export default itemsSlice.reducer;
