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

  const [modalVisible, setModalVisible] = useState(false);

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    dispatch(actionsGroceries.groceriesRead({ orderByName, orderByType }));
  }, [dispatch, orderByName, orderByType]);
  console.log('modalVisible:::', modalVisible);
  return (
    <>
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
                      onClick={() => {
                        console.log(grocery);
                        modalToggle();
                      }}
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

      {modalVisible && (
        <div className="modal-background" onClick={() => modalToggle()}>
          <form className="modal" onClick={(event) => event.stopPropagation()}>
            {/* event.stopPropagation() => form안의 핸들러 이벤트가 상위 엘리먼트까지 영향을 주는 것을 막아준다. */}
            <h3 className="modal-header">Edit</h3>
            <table className="modal-table">
              <tbody>
                <tr>
                  <th>
                    <span>Name</span>
                  </th>
                  <td>
                    <input type="text" name="grocery-name" placeholder="Name" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>Enter</span>
                  </th>
                  <td>
                    <input
                      type="date"
                      name="grocery-enter"
                      placeholder="YYYY-MM-DD"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>Expire</span>
                  </th>
                  <td>
                    <input
                      type="date"
                      name="grocery-expire"
                      placeholder="YYYY-MM-DD"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="modal-footer">
              <button
                className="button-close"
                type="button"
                onClick={() => modalToggle()}
              >
                <span className="material-icons">close</span>
              </button>
              <button className="button-update" onClick={() => {}}>
                <span className="material-icons">edit_note</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Groceires;
