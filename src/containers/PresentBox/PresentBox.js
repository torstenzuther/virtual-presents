import React from 'react';
import cssStyle from './PresentBox.module.css';
import PresentCard from '../PresentCard/PresentCard';

const presentBox = (props) => {
    const PresentBoxComponent = props.component;
      
    return (
        <PresentCard title={props.title}>
    <div className={cssStyle.PresentBox} style={props.cssStyle}>
        <PresentBoxComponent onClick={props.clicked}></PresentBoxComponent>
        <h3>{props.text}</h3>
   </div></PresentCard>
)};

export default presentBox;
