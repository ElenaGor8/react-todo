import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import PropTypes from 'prop-types';

function TodoContainer() {
    const [todoList, setTodoList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    const fetchData = async () => {
        const viewName = "Grid%20view";
        const queryParam = `view=${viewName}`;

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
        };
        
        const urlWithQueryParam = `${url}?${queryParam}`;

        try {
            const response = await fetch(urlWithQueryParam, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const todos = data.records.map((todo) => {
                return {
                    id: todo.id,
                    title: todo.fields.Title
                };
            });

            setTodoList(todos);
            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };

    React.useEffect(() => {
        fetchData(); // eslint-disable-next-line
    }, []);

    const addTodo = async (title) => {
        const newTitle = {
            fields: {
                Title: title,
            },
        };
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(newTitle),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const todo = await response.json();
            const newTodo = {
                id: todo.id,
                title: todo.fields.Title
            };
            console.log(newTodo);
            setTodoList([...todoList, newTodo]);
        } catch (error) {
            console.log(error.message);
        }
    };

    const removeTodo = async (id) => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-type": "application/json",
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const newTodoList = todoList.filter((todo) => todo.id !== id);
            setTodoList(newTodoList);
        } catch (error) {
            console.log(error.message);
        }
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
}

// Define the propTypes property
TodoContainer.propTypes = {
    onAddTodo: PropTypes.func,
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
};

export default TodoContainer;
