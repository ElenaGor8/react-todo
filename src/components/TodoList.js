import * as React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import style from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => (
    <ul className={style.TodoListTop}>
        <li>
            <span>Title</span>
            <span>Priority</span>
            <span>Due Date</span>
        </li>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
};

export default TodoList;