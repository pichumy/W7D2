const fetchTodos = () => {
  return $.ajax({
  method: 'GET',
  url: '/api/todos'
}).then(
  todos => console.log(todos)
);
};

export default fetchTodos;
