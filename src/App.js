import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      const todos = data.records.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.Title
        };
      });
      
      console.log(todos);

      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message);
    }
  };  

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (!isLoading)
      localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //eslint-disable-next-line 
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
};

export default App;
