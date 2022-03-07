import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { Provider } from 'react-redux';
import store from 'store/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// reportWebVitals() 에 console.log를 넣어주면 개발창을 통해 앱의 퍼포먼스시간들을 분석
