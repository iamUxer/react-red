import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems } from 'store/items/itemsSlice';
import actionsItems from 'store/items/itemsActions.js';

const Items = () => {
  const dispatch = useDispatch();

  // useSelector = stateItems 리듀서의 현재 상태들(item, items)을 가져온다.
  const item = { ...useSelector(stateItems).item };
  console.log(item);

  const items = JSON.parse(JSON.stringify(useSelector(stateItems).items));
  console.log(items);

  // useEffect = 렌더링이 된 후에 함수 끝의 []에 따라, 첫 실행 or 상태가 바뀔 때 마다 실행
  useEffect(() => {
    dispatch(actionsItems.itemSet({ name: '', enter: '', expire: '' }));
    // itemSet은 다른 메뉴로 이동했다 현재 페이지로 다시 돌아왔을 때 상태값을 초기화 해주기 위해 실행.

    dispatch(actionsItems.itemsRead());
    // dispatch = actionsItems파일의 itemsRead액션을 실행해준다.
    // itemsRead액션은 db에서 items를 가져오기 때문에 렌더링 후 items 리스트가 보인다.
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
            // onChange되는 value들을 itemSet리듀서로 보낸다.
          }}
        />
        <button type="submit" className="button-create">
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
                  <input
                    type="date"
                    value={item.expire}
                    onChange={(event) => {
                      item.expire = event.target.value;
                      dispatch(
                        actionsItems.itemsUpdate({
                          item_pk: item.item_pk,
                          item,
                        })
                      );
                    }}
                  />
                </td>
                <td className="td-delete">
                  <button
                    className="button-delete"
                    onClick={() =>
                      dispatch(actionsItems.itemsDelete(item.item_pk))
                    }
                  >
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Items;
