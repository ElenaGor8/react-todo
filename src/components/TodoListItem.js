import React from 'react';
import { ReactComponent as Remove } from '../img/delete_FILL0_wght400_GRAD0_opsz48.svg';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
       
       <li className={style.ListItem}>
            <span>{todo.title}</span>
            <span>{todo.DueDate}</span>
            <span>{todo.Priority}</span>

            <button className={style.ButtonRemove}
                type="button"
                onClick={() => onRemoveTodo(todo.id)}>
                <Remove />
            </button>
        </li>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.array,
    onRemoveTodo: PropTypes.func,
};

export default TodoListItem;

