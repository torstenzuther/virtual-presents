import React from 'react';

const present = (props) => {
    return (
    <div {...props}>
        <p>{props.text}</p>
    </div>
)};

export default present;
