import React from 'react';
import PresentCard from '../PresentCard/PresentCard';

const present = (props) => {
    return (
    <PresentCard title={props.title}><div style={props.cssStyle}>
        <p>{props.text}</p>
    </div></PresentCard>
)};

export default present;
