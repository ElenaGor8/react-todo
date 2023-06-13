import React from 'react';
import { ReactComponent as Remove } from "./img/delete_FILL0_wght400_GRAD0_opsz48.svg";
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <li className={style.ListItem}>
            {todo.title}
            <button className={style.ButtonRemove}
            type="button"
                onClick={() => onRemoveTodo(todo.id)}>
                <Remove/>
            </button>
        </li>
    );
};

export default TodoListItem;        

