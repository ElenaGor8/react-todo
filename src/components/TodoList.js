import * as React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo }) => (
    <ul>
        <li>
            <span>Title</span>
            <span>Due Date</span>
            <span>Priority</span>
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