import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);

  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ data: { todoList: [] } }), 2000)
    ).then(result => {
      setTodoList(result.data.todoList);
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  const removeTodo = (id) => {
    const newArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(newArray);
  };

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={addTodo} />
      <p></p>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;
