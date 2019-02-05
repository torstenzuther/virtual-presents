import React from 'react';
import cssStyle from './PresentBox.module.css';
import PresentCard from './../PresentCard/PresentCard';

const presentBox = (props) => {
    return (
        <PresentCard title={props.title}>
    <div className={cssStyle.PresentBox} style={props.cssStyle}>
        <img src={props.img} alt={""} onClick={props.clicked}/>
        <h3>{props.text}</h3>
   </div></PresentCard>
)};

export default presentBox;
