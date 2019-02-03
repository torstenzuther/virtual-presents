import React from 'react';
import PresentCard from './../PresentCard/PresentCard';

const timerMessage = (props) => {
    const text = props.text.replace("<seconds>", props.seconds);
    return (
    <PresentCard title={props.title}><div style={props.cssStyle}>
        <p>{text}</p>
    </div></PresentCard>)
  
}

export default timerMessage;