import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems, actionsItems } from 'store/items/itemsSlice';
// import actionsItems from 'store/items/itemsActions.js';

const Items = () => {
  const dispatch = useDispatch();
  const item = { ...useSelector(stateItems).item };

  // const items = JSON.parse(JSON.stringify(useSelector(stateItems).items));
  // const items = Object.assign([], useSelector(stateItems).items);
  // useEffect(() => {
  //   dispatch(actionsItems.itemSet({
  //     name: '',
  //     enter: '',
  //     expire: '',
  //   }));
  //   dispatch(actionsItems.itemsRead());
  // }, [dispatch]);
  return (
    <article>
      <form class="form-inputs">
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
        <button class="button-create">
          <span class="material-icons">edit</span>
        </button>
      </form>
      <div class="div-table">
        <table>
          <thead>
            <tr>
              <th>Move</th>
              <th>
                <span class="title-names">
                  Name
                  <span class="material-icons active">arrow_drop_up</span>
                  <span class="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>
                <span class="title-names">
                  Enter
                  <span class="material-icons">arrow_drop_up</span>
                  <span class="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>
                <span class="title-names">
                  Expire
                  <span class="material-icons">arrow_drop_up</span>
                  <span class="material-icons">arrow_drop_down</span>
                </span>
              </th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" onchange="" />
              </td>
              <td>사과</td>
              <td>2021-01-01</td>
              <td class="td-expire">
                <input type="date" value="2021-02-02" onchange="" />
              </td>
              <td class="td-delete">
                <button class="button-delete" onclick="">
                  <span class="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" onchange="" />
              </td>
              <td>바나나</td>
              <td>2021-01-01</td>
              <td class="td-expire">
                <input type="date" value="2021-02-02" onchange="" />
              </td>
              <td class="td-delete">
                <button class="button-delete" onclick="">
                  <span class="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" onchange="" />
              </td>
              <td>딸기</td>
              <td>2021-01-01</td>
              <td class="td-expire">
                <input type="date" value="2021-02-02" onchange="" />
              </td>
              <td class="td-delete">
                <button class="button-delete" onclick="">
                  <span class="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" onchange="" />
              </td>
              <td>키위</td>
              <td>2021-01-01</td>
              <td class="td-expire">
                <input type="date" value="2021-02-02" onchange="" />
              </td>
              <td class="td-delete">
                <button class="button-delete" onclick="">
                  <span class="material-icons">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" onchange="" />
                </td>
                <td>{item.name}</td>
                <td>{item.enter}</td>
                <td class="td-expire">
                  <input type="date" value="2022-02-21" onchange="" />
                </td>
                <td class="td-delete">
                  <button class="button-delete" onclick="">
                    <span class="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}

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
          {/* <td class="td-expire">
                <input
                type="date"
                value={item.expire}
                onChange={(event) => {
                    item.expire = event.target.value;
                    dispatch(actionsItems.itemsSet(items));
                }}
                />
            </td> */}
          {/* <td class="td-delete">
                <button
                class="button-delete"
                onClick={() =>
                    dispatch(actionsItems.itemsDelete(index))
                }
                >
                <span class="material-icons">delete</span>
                </button>
            </td> */}
        </table>
      </div>
    </article>
  );
};

export default Items;
