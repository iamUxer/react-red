import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { stateGroceries } from 'store/groceries/groceriesSlice.js';
import actionsGroceries from 'store/groceries/groceriesActions.js';
import axios from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groceries = JSON.parse(
    JSON.stringify(useSelector(stateGroceries).groceries)
  );
  // dispatch로 불러와야 데이터를 볼 수 있다.

  useEffect(() => {
    dispatch(actionsGroceries.groceriesRead());
    // groceries를 불러온다.
  }, [dispatch]);

  const [toggle, setToggle] = useState(false);
  const accountToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="logo">RED</div>
      <div>
        <NavLink
          to="home"
          id="menu-a-home"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-icons-outlined">home</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="items"
          id="menu-a-items"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-icons-outlined">shopping_cart</span>
        </NavLink>
      </div>
      <div className="menu-groceries">
        <NavLink
          to="groceries"
          id="menu-a-groceries"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-icons">kitchen</span>
        </NavLink>
        <div>
          <span id="menu-groceries-counter">{groceries.length}</span>
        </div>
      </div>
      <div className="empty"></div>
      <div>
        <a href="#!" id="menu-a-account" onClick={accountToggle}>
          <span className="material-icons-outlined">account_circle</span>
        </a>
        {!!toggle && (
          <ul className="account-menu active" onClick={(e) => accountToggle(e)}>
            <li>Guest</li>
            <li
              onClick={() => {
                navigate(`/members`);
              }}
            >
              Login
            </li>
            <li>Hello 홍길동!</li>
            <li
              onClick={() => {
                axios.defaults.headers.common['x-jwt-token'] = null;
                localStorage.removeItem('x-jwt-token');
                window.location.href = '/members';
              }}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
