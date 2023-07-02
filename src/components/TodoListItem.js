import React from 'react';
import { ReactComponent as Remove } from '../img/trash.svg';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <li className={style.ListItem}>
            <span className={style.Title}>{todo.title}</span>
            <span className={style.Priority}>{todo.Priority}</span>
            <span className={style.Date}>{todo.DueDate}</span>

            <button className={style.ButtonRemove}
                type="button"
                onClick={() => onRemoveTodo(todo.id)}>
                <Remove className={style.addIcon}/>
            </button>
        </li>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.array,
    onRemoveTodo: PropTypes.func,
};

export default TodoListItem;

