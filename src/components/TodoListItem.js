import React from 'react';
import { ReactComponent as Remove } from '../img/trash.svg';
import style from '../components/TodoContainer.module.css';

import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    const formattedDate = new Date(todo.DueDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });

    return (
        <li className={style.ListItem}>
            <span className={style.Title}>{todo.title}</span>
            <span className={style.Date}>{todo.DueDate}</span>
            <span className={style.Done}>{todo.Checkbox}</span>

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
    todo: PropTypes.array,
    id: PropTypes.string,
    title: PropTypes.string,
    Priority: PropTypes.string,
    DueDate: PropTypes.string,
    onRemoveTodo: PropTypes.func,
};

export default TodoListItem;



