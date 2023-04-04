import * as React from 'react';
import TodoListItem from './TodoListItem';


const todoList = [
    {
        id: 1,
        title: 'finish lesson 1'
    },
    {
        id: 2,
        title: 'continue lesson 2'
    },
    {
        id: 3,
        title: 'start lesson 3'
    },
];

function TodoList() {
    return (
        <ul>
            {todoList.map(function (todo) {
                return <TodoListItem key={todo.id} todo={todo} />
            })}
        </ul>
    );
}

export default TodoList;