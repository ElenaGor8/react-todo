import React from 'react';

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = React.useState();
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        const todoObject = {
            id: Date.now(),
            title: todoTitle,
        };
        props.onAddTodo(todoObject);
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange} />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;