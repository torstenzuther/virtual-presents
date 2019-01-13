import React from 'react';
import presentImg from './../../assets/giftbox.svg';

const presentBox = (props) => {
    
    return (
    <div className={"presentBox"}>
        <img src={presentImg} alt="Dein Geschenk" onClick={props.clicked}/>
        <h3>{props.text}</h3>
        <style jsx>{props.style}</style>
   </div>
)};

export default presentBox;
