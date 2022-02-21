import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems } from 'store/items/itemsSlice.js';
import actionsItems from 'store/items/itemsActions.js';
import actionsGroceries from 'store/groceries/groceriesActions.js';

const Items = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderByName = searchParams.get('orderByName') || 'name';
  const orderByType = searchParams.get('orderByType') || 'asc';
  // useSelector = stateItems 리듀서의 현재 상태들(item, items)을 가져온다.
  const item = { ...useSelector(stateItems).item };
  const items = JSON.parse(JSON.stringify(useSelector(stateItems).items));
  const orderBy = (orderByName, orderByType) => {
    navigate(`?orderByName=${orderByName}&orderByType=${orderByType}`);
  };

  // useEffect = 렌더링이 된 후에 함수 끝의 []에 따라, 첫 실행 or 상태가 바뀔 때 마다 실행
  useEffect(() => {
    dispatch(actionsItems.itemSet({ name: '', enter: '', expire: '' }));
    // itemSet은 다른 메뉴로 이동했다 현재 페이지로 다시 돌아왔을 때 상태값을 초기화 해주기 위해 실행.

    dispatch(actionsItems.itemsRead({ orderByName, orderByType }));
    // dispatch = actionsItems파일의 itemsRead액션을 실행해준다.
    // itemsRead액션은 db에서 items를 가져오기 때문에 렌더링 후 items 리스트가 보인다.
  }, [dispatch, orderByName, orderByType]);

  const onCheckedHandle = (e, id) => {
    if (e.target.checked) {
      dispatch(
        actionsGroceries.groceriesCreate({
          id: id,
        })
      );
    } else {
      dispatch(
        actionsGroceries.groceriesDelete({
          id: id,
        })
      );
    }
  };

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
                  <span
                    className={`material-icons${
                      orderByName === 'name' && orderByType === 'asc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('name', 'asc');
                    }}
                  >
                    arrow_drop_up
                  </span>
                  <span
                    className={`material-icons${
                      orderByName === 'name' && orderByType === 'desc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('name', 'desc');
                    }}
                  >
                    arrow_drop_down
                  </span>
                </span>
              </th>
              <th>
                <span className="title-names">
                  Enter
                  <span
                    className={`material-icons${
                      orderByName === 'enter' && orderByType === 'asc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('enter', 'asc');
                    }}
                  >
                    arrow_drop_up
                  </span>
                  <span
                    className={`material-icons${
                      orderByName === 'enter' && orderByType === 'desc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('enter', 'desc');
                    }}
                  >
                    arrow_drop_down
                  </span>
                </span>
              </th>
              <th>
                <span className="title-names">
                  Expire
                  <span
                    className={`material-icons${
                      orderByName === 'expire' && orderByType === 'asc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('expire', 'asc');
                    }}
                  >
                    arrow_drop_up
                  </span>
                  <span
                    className={`material-icons${
                      orderByName === 'expire' && orderByType === 'desc'
                        ? ' active'
                        : ''
                    }`}
                    onClick={() => {
                      orderBy('expire', 'desc');
                    }}
                  >
                    arrow_drop_down
                  </span>
                </span>
              </th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={`item-${item.name}`}>
                <td>
                  <input
                    name={`item-${item.name}`}
                    type="checkbox"
                    onChange={(e) => onCheckedHandle(e, item.item_pk)}
                    defaultChecked={item.grocery_pk !== null}
                  />
                </td>
                <td className="td-name">{item.name}</td>
                <td className="td-enter">{item.enter}</td>
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
                    onClick={() => {
                      dispatch(actionsItems.itemsDelete(item.item_pk));
                    }}
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
