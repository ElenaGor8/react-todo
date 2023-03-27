import React from 'react';

function AddTodoForm() {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);
        event.target.reset();
    }
    
    return (
        <form onSubmit = {handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title"/>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;