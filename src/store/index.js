import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemsSlice.js';

export default configureStore({
  reducer: {
    items: itemsReducer
  }
});
