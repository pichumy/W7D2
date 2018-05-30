import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import TodoListContainer from './todo_list';
import { removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';


const mapStateToProps = (state, ownProps) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveTodos: todos => dispatch(receiveTodos(todos)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: todo => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect( mapStateToProps,mapDispatchToProps)(TodoListContainer);
