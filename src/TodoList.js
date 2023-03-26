import * as React from 'react';

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
            {todoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    );
}

export default TodoList;