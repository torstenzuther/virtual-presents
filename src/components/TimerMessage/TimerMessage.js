import React from 'react';

const timerMessage = (props) => {
    const text = props.text.replace("<seconds>", props.seconds);
    return (
    <div className="timerMessage">
        <p>{text}</p>
        <style jsx>{props.style}</style>
    </div>)
  
}

export default timerMessage;