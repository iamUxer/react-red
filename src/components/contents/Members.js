import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateMembers } from 'store/members/membersSlice.js';
import actionsMembers from 'store/members/membersActions.js';

const Members = () => {
  const dispatch = useDispatch();
  const member = { ...useSelector(stateMembers).member };

  return (
    <article>
      <form
        className="form-inputs"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(actionsMembers.membersLogin(member));
        }}
      >
        <input
          type="text"
          name="name"
          value={member.name}
          placeholder="Name"
          onChange={(event) => {
            member.name = event.target.value;
            dispatch(actionsMembers.memberSet(member));
            // onChange되는 value들을 memberSet리듀서로 보낸다.
          }}
        />
        <input
          type="password"
          name="age"
          value={member.age}
          placeholder="Password"
          onChange={(event) => {
            member.age = event.target.value;
            dispatch(actionsMembers.memberSet(member));
            // onChange되는 value들을 memberSet리듀서로 보낸다.
          }}
        />
        <button type="submit" className="button-create">
          <span className="material-icons">edit</span>
        </button>
      </form>
    </article>
  );
};

export default Members;
