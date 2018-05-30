export const fetchTodos = () => {
  return $.ajax({
  method: 'GET',
  url: '/api/todos'
});
};

export const createTodo = (todo) => {
  console.log(todo);
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo: todo
    }
  });
};
