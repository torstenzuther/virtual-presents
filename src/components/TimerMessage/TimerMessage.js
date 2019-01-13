import React from 'react';

const timerMessage = (props) => {
    const text = props.text.replace("<seconds>", props.seconds);
    return (
    <div style={props.cssStyle}>
        <p>{text}</p>
    </div>)
  
}

export default timerMessage;