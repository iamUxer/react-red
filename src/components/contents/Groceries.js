import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems } from 'store/items/itemsSlice.js';
import actionsItems from 'store/items/itemsActions.js';
import { stateGroceries } from 'store/groceries/groceriesSlice.js';
import actionsGroceries from 'store/groceries/groceriesActions.js';

const Groceires = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderByName = searchParams.get('orderByName') || 'name';
  const orderByType = searchParams.get('orderByType') || 'asc';
  const groceries = JSON.parse(
    JSON.stringify(useSelector(stateGroceries).groceries)
  );

  const orderBy = (orderByName, orderByType) => {
    navigate(`?orderByName=${orderByName}&orderByType=${orderByType}`);
  };

  useEffect(() => {
    dispatch(actionsGroceries.groceriesRead({ orderByName, orderByType }));
  }, [dispatch, orderByName, orderByType]);

  return (
    <article>
      <form className="form-inputs">
        <input type="text" name="q" placeholder="Search" />
        <button className="button-search">
          <span className="material-icons">search</span>
        </button>
      </form>
      <div className="div-table">
        <table>
          <thead>
            <tr>
              <th>No</th>
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
              <th>Edit</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {groceries.map((grocery, index) => (
              <tr key={`item-${grocery.name}`}>
                <td>{index + 1}</td>
                <td>{grocery.name}</td>
                <td>{grocery.enter}</td>
                <td>{grocery.expire}</td>
                <td className="td-update">
                  <button
                    className="button-update"
                    // onClick="modalToggle();"
                  >
                    <span className="material-icons">edit_note</span>
                  </button>
                </td>
                <td className="td-delete">
                  <button
                    className="button-delete"
                    onClick={() =>
                      dispatch(
                        actionsGroceries.groceriesDelete({
                          id: grocery.grocery_pk,
                        })
                      )
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

export default Groceires;
