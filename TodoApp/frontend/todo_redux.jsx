import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos, fetchTodos} from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import actionChecker from './middleware/thunk.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.allTodos = allTodos;
  store.dispatch(fetchTodos());
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});
