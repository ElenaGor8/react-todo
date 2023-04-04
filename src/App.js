import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
