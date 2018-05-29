import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let stateCopy = {};
  switch (action.type){
    case RECEIVE_TODO:
      let id = action.todo.id;
      stateCopy = merge({}, state);
      stateCopy[id] = action.todo;
      return stateCopy;
    case RECEIVE_TODOS:
    let newState = {};
    action.todos.forEach( (todo) => {
      newState[todo.id] = todo;
     });
      return newState;
    case REMOVE_TODO:
      stateCopy = merge({}, state);
      delete stateCopy[action.todo.id];
      return stateCopy;
    default:
      return state;
  }

};


export default todosReducer;
