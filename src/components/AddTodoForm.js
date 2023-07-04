import React from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';
import style from '../App.module.css';
import { ReactComponent as Add } from '../img/add-fill.svg';

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
                New Item: 
            </InputWithLabel>
            <button className={style.addButton}
                type="submit"
                title="add item">
                <Add className={style.addIcon} />
            </button>
        </form>
    );
};


// Define the propTypes property
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};

export default AddTodoForm;
