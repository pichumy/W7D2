import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoListContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
  const listItems = this.props.todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} removeTodo={this.props.removeTodo} />
  ));
  const errors = this.props.errors;
  return (
    <div>
      {errors}
      <ul>
        {listItems}
      </ul>
      <TodoForm createTodo={this.props.createTodo} />
    </div>
  );
}
}

export default TodoListContainer;
