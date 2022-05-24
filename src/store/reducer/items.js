import { createStore } from 'redux';
import { ITEMS_CREATE, ITEM_SET, itemsCreate, itemSet } from '../action/items';

const initialState = {
  items: [],
  item: {
    name: 'abcde',
    enter: '',
    expire: '',
  },
};

const itemsReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case ITEMS_CREATE:
      return {
        ...state,
      };
    case ITEM_SET:
      return {
        ...state,
        item: {
          ...state.item,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default createStore(itemsReducer);
