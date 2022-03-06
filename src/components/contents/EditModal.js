import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stateGroceries } from 'store/groceries/groceriesSlice.js';
import actionsGroceries from 'store/groceries/groceriesActions.js';

const EditModal = (props) => {
  const { modalChange, modalToggle, onChangeModal } = props;

  const dispatch = useDispatch();
  const grocery = { ...useSelector(stateGroceries).grocery };

  return (
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
                <input
                  type="text"
                  name="grocery-name"
                  placeholder="Name"
                  value={modalChange.name}
                  onChange={(e) => onChangeModal('name', e.target.value)}
                />
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
                  value={modalChange.enter}
                  onChange={(e) => onChangeModal('enter', e.target.value)}
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
                  value={modalChange.expire}
                  onChange={(e) => onChangeModal('expire', e.target.value)}
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
          <button
            className="button-update"
            onClick={() => {
              if (grocery === modalChange) {
                modalToggle();
              } else {
                dispatch(actionsGroceries.groceriesUpdate(modalChange));
              }
            }}
          >
            <span className="material-icons">edit_note</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
