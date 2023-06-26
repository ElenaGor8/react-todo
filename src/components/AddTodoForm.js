import React from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState();
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        if (todoTitle === "") {
            return;
        }
        onAddTodo(todoTitle);
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}>
                <strong>Title: </strong></InputWithLabel>
            <button>Add</button>
        </form>
    );
};

// Define the propTypes property
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};

export default AddTodoForm;
