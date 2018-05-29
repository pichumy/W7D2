import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import fetchTodos from '../util/todo_api_util.js';
window.fetchTodos = fetchTodos;
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
