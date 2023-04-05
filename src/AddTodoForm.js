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
        props.onAddTodo(todoTitle);
        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange}/>
            <button>Add</button>bb
        </form>
    );
}

export default AddTodoForm;