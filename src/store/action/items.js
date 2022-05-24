export const ITEMS_CREATE = 'ITEMS_CREATE';
export const ITEM_SET = 'ITEM_SET';

export const itemsCreate = (name) => {
  return {
    type: ITEMS_CREATE,
    payload: name,
  };
};
export const itemSet = (name) => {
  console.log('itemset::', name);
  return {
    type: 'ITEM_SET',
    payload: name,
  };
};
