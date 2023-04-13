import React from 'react';

const InputWithLabel = (props) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input
                ref={inputRef}
                id="todoTitle"
                type="text" name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
        </>
    );
};

export default InputWithLabel;


