import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateItems } from 'store/items/itemsSlice.js';
import actionsSearch from 'store/search/searchActions.js';

function Search() {
  // const url = new URL(window.location.href);
  // const spSearch = url.searchParams.get('q') || '';
  // const { history } = props;
  const dispatch = useDispatch();
  const items = useSelector(stateItems).items;
  const [q, setQ] = useState('');
  const searchRead = (event) => {
    dispatch(actionsSearch.searchRead(q));
    // history.push(`/search?q=${q}`);
    event.preventDefault();
  };
  useEffect(() => {
    dispatch(actionsSearch.searchRead(''));
  }, [dispatch]);
  // useEffect(() => {
  //     setQ(spSearch);
  //     dispatch(actionsSearch.searchRead(spSearch));
  //   }, [dispatch, spSearch]);
  return (
    <div>
      <h3>Search</h3>
      <hr className="d-block" />
      <div>
        <form
          onSubmit={(event) => {
            searchRead(event);
          }}
        >
          <input
            type="text"
            placeholder="Search"
            value={q}
            onChange={(event) => {
              setQ(event.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </div>
      <hr className="d-block" />
      <div>
        <table className="table-search">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
