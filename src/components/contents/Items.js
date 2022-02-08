import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems, actionsItems } from 'store/items/itemsSlice';
// import actionsItems from 'store/items/itemsActions.js';

const Items = () => {
  const dispatch = useDispatch();
  const item = { ...useSelector(stateItems).item };
  console.log(item);

  const items = JSON.parse(JSON.stringify(useSelector(stateItems).items));
  // const items = Object.assign([], useSelector(stateItems).items);
  useEffect(() => {
    dispatch(
      actionsItems.itemSet({
        name: '',
        enter: '',
        expire: '',
      })
    );
    dispatch(actionsItems.itemsRead());
  }, [dispatch]);
  return (
    <article>
      <form
        className="form-inputs"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(actionsItems.itemsCreate(item));
        }}
      >
        <input
          type="text"
          name="name"
          value={item.name}
          placeholder="Create"
          onChange={(event) => {
            item.name = event.target.value;
            dispatch(actionsItems.itemSet(item));
          }}
        />
        <button className="button-create">
          <span className="material-icons">edit</span>
        </button>
      </form>
      <div className="div-table">
        <table>
          <thead>
            <tr>
              <th>Move</th>
              <th>
                <span className="title-names">
                  Name
                  <span className="material-icons active">arrow_drop_up</span>
                  <span className="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>
                <span className="title-names">
                  Enter
                  <span className="material-icons">arrow_drop_up</span>
                  <span className="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>
                <span className="title-names">
                  Expire
                  <span className="material-icons">arrow_drop_up</span>
                  <span className="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.name}</td>
                <td>{item.enter}</td>
                <td className="td-expire">
                  <input type="date" value="2022-02-21" />
                </td>
                <td className="td-delete">
                  <button className="button-delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          {/* <td>
                <input
                type="text"
                placeholder="Name"
                value={item.name}
                onChange={(event) => {
                    item.name = event.target.value;
                    dispatch(actionsItems.itemsSet(items));
                }}
                />
            </td> */}
          {/* <td>
                <input
                type="text"
                placeholder="Enter"
                value={item.enter}
                onChange={(event) => {
                    item.enter = event.target.value;
                    dispatch(actionsItems.itemsSet(items));
                }}
                />
            </td> */}
          {/* <td className="td-expire">
                <input
                type="date"
                value={item.expire}
                onChange={(event) => {
                    item.expire = event.target.value;
                    dispatch(actionsItems.itemsSet(items));
                }}
                />
            </td> */}
          {/* <td className="td-delete">
                <button
                className="button-delete"
                onClick={() =>
                    dispatch(actionsItems.itemsDelete(index))
                }
                >
                <span className="material-icons">delete</span>
                </button>
            </td> */}
        </table>
      </div>
    </article>
  );
};

export default Items;
