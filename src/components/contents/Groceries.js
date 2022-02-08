import React from 'react';

const Groceires = () => {
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
              <th>Edit</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>사과</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button
                  className="button-update"
                  // onClick="modalToggle();"
                >
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>바나나</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>딸기</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>키위</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>사과</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>바나나</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>딸기</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>키위</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>사과</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>바나나</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>딸기</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>키위</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>사과</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>바나나</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>딸기</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>키위</td>
              <td>2021-01-01</td>
              <td>2021-02-02</td>
              <td className="td-update">
                <button className="button-update">
                  <span className="material-icons">edit_note</span>
                </button>
              </td>
              <td className="td-delete">
                <button className="button-delete" onClick={null}>
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Groceires;
