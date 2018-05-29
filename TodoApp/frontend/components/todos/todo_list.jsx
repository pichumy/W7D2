import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoListContainer = (props) => {
  console.log(props.removeTodo);
  const listItems = props.todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} removeTodo={props.removeTodo} />
  ));

  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  );
};

export default TodoListContainer;
