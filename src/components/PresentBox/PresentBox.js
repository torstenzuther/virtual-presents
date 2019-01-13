import React from 'react';
import presentImg from './../../assets/giftbox.svg';

const presentBox = (props) => {
    
    return (
    <div {...props}>
        <img src={presentImg} alt="Dein Geschenk" onClick={props.clicked}/>
        <h3>{props.text}</h3>
   </div>
)};

export default presentBox;
