import React from 'react';
import cssStyle from './PresentBox.module.css';

const presentBox = (props) => {
    return (
    <div className={cssStyle.PresentBox} style={props.cssStyle}>
        <img src={props.img} onClick={props.clicked}/>
        <h3>{props.text}</h3>
   </div>
)};

export default presentBox;
