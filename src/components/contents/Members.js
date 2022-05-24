import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stateMembers } from 'store/members/membersSlice.js';
import actionsItems from 'store/members/membersActions.js';
import actionsGroceries from 'store/groceries/groceriesActions.js';

const Members = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderByName = searchParams.get('orderByName') || 'name';
  const orderByType = searchParams.get('orderByType') || 'asc';
  // useSelector = stateMembers 리듀서의 현재 상태들(member, members)을 가져온다.
  const member = { ...useSelector(stateMembers).member };
  const members = JSON.parse(JSON.stringify(useSelector(stateMembers).members));
  const orderBy = (orderByName, orderByType) => {
    navigate(`?orderByName=${orderByName}&orderByType=${orderByType}`);
  };

  // useEffect = 렌더링이 된 후에 함수 끝의 []에 따라, 첫 실행 or 상태가 바뀔 때 마다 실행
  useEffect(() => {
    dispatch(actionsItems.memberSet({ name: '', enter: '', expire: '' }));
    // memberSet은 다른 메뉴로 이동했다 현재 페이지로 다시 돌아왔을 때 상태값을 초기화 해주기 위해 실행.

    dispatch(actionsItems.membersRead({ orderByName, orderByType }));
    // dispatch = actionsItems파일의 membersRead액션을 실행해준다.
    // membersRead액션은 db에서 members를 가져오기 때문에 렌더링 후 members 리스트가 보인다.
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
          dispatch(actionsItems.membersCreate(member));
        }}
      >
        <input
          type="text"
          name="name"
          value={member.name}
          placeholder="Create"
          onChange={(event) => {
            member.name = event.target.value;
            dispatch(actionsItems.memberSet(member));
            // onChange되는 value들을 memberSet리듀서로 보낸다.
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

              <th>Follow</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="td-name">{member.name}</td>{' '}
                <td>
                  <input
                    name={`member-${member.name}`}
                    type="checkbox"
                    onChange={(e) => {
                      onCheckedHandle(e, member.member_pk);
                      member.grocery_pk = !member.grocery_pk;
                      dispatch(actionsItems.membersSet(members));
                    }}
                    checked={member.grocery_pk || false}
                    // 결과값이 null이면 오류가 난다.
                  />
                </td>
                <td className="td-delete">
                  <button
                    className="button-delete"
                    onClick={() => {
                      dispatch(actionsItems.membersDelete(member.member_pk));
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

export default Members;
