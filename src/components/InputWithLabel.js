import React from 'react';
import PropTypes from 'prop-types';

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

// Define the propTypes property
InputWithLabel.propTypes = {
    children: PropTypes.node.isRequired,
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;


