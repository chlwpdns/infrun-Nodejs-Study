import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import primiseMiddleware from 'redux-promise';

const store = createStore();

const middlewareEnhancer = applyMiddleware(primiseMiddleware, thunkMiddleware);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
