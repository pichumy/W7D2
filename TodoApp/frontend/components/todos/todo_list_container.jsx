import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import TodoListContainer from './todo_list';
import { removeTodo } from '../../actions/todo_actions';


const mapStateToProps = (state, ownProps) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveTodos: todos => dispatch(receiveTodos(todos)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect( mapStateToProps,mapDispatchToProps)(TodoListContainer);
