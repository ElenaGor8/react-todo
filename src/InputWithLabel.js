import React from 'react';

const InputWithLabel = (props) => (
    <>
        <label htmlFor="todoTitle">{props.label}</label>
        <input id="todoTitle"
            type="text" name="title"
            value={props.todoTitle}
            onChange={props.handleTitleChange} />
    </>
);

export default InputWithLabel;