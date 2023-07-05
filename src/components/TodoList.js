import * as React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import style from "../App.module.css";

const TodoList = ({ todoList, onRemoveTodo, /*onToggleTodo*/ }) => (
    <ul>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} /*onToggleTodo={{onToggleTodo}}*/ />
        ))}
    </ul>
);

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    // onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;