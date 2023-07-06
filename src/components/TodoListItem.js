import React from 'react';
import { ReactComponent as Remove } from '../img/trash.svg';
import style from '../components/TodoContainer.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
    const formattedDate = new Date(todo.DueDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });

    //adding checkboxes
    // const handleToggle = () => {
    //     onToggleTodo(todo.id);
    // };

    return (
        <li className={style.ListItem}>

            <span
                className={`${style.Title} ${todo.completed ? style.Completed : ''}`}
            >   {todo.title}
            </span>

            <span
                className={`${style.Date} ${todo.completed ? style.Completed : ''}`}
            >   {formattedDate}
            </span>

            <button className={style.removeButton}
                type="button"
                title="remove item"
                onClick={() => onRemoveTodo(todo.id)}>
                <Remove className={style.trashIcon} />
            </button>
        </li>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
};

export default TodoListItem;



