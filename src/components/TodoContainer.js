import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import PropTypes from 'prop-types';
import { ReactComponent as Sort } from '../img/arrow-sort-24-filled.svg';
import style from './TodoContainer.module.css';

function TodoContainer({ tableName, baseName, apiKey }) {
    const [todoList, setTodoList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [sortDirection, setSortDirection] = React.useState('asc'); // Default sort direction is ascending
    const url = `https://api.airtable.com/v0/${baseName}/${tableName}`;

    const fetchData = async () => {
        const viewName = "Grid%20view";
        const queryParam = `view=${viewName}&sort[0][field]=Date&sort[0][direction]=${sortDirection}`;
        const urlWithQueryParam = `${url}?${queryParam}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        };


        try {
            const response = await fetch(urlWithQueryParam, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            const todos = data.records.map((todo) => {
                return {
                    id: todo.id,
                    title: todo.fields.Title,
                    DueDate: todo.fields.Date,
                    Checkbox: todo.fields.Done,
                    
                };
            });

            //Lesson 5.1 Sort with JavaScript
            // function sortTodoList(objectA, objectB) {
            //     if (objectA.title < objectB.title) {
            //         return -1;
            //     }
            //     if (objectA.title > objectB.title) {
            //         return 1;
            //     }
            //     return 0;
            // };
            // setTodoList(todos.sort(sortTodoList));

            setTodoList(todos);
            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };

    React.useEffect(() => {
        fetchData(); // eslint-disable-next-line
    }, [sortDirection]);

    const addTodo = async (title) => {
        const newTitle = {
            fields: {
                Title: title,
            },
        };
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
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
        const url = `https://api.airtable.com/v0/${baseName}/${tableName}/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${apiKey}`,
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

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className={style.TodoContainer}>
            <h1>{tableName}</h1>
            
            <div className={style.AddTodoForm}>
                <AddTodoForm onAddTodo={addTodo} />

                {/* Toggle Sort Direction: {sortDirection === 'asc' ? 'Ascending' : 'Descending'} */}
                <button className={style.sortButton}
                    type="button"
                    title="sort items"
                    onClick={toggleSortDirection}>
                    <Sort />
                </button>
            </div>
            
            {isLoading ? (
                <p>Loading...</p>
                ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
        </div>
    );
}

// Define the propTypes property
TodoContainer.propTypes = {
    onAddTodo: PropTypes.func,
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
};

export default TodoContainer;
