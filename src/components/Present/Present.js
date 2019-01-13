import React from 'react';

const present = (props) => {
    return (
    <div className={"present"}>
        <p>{props.text}</p>
        <style jsx>{props.style}</style>
    </div>
)};

export default present;
