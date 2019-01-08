import React from 'react';
import presentImg from './../../assets/giftbox.svg';
import styles from './PresentBox.module.css';

const presentBox = (props) => (
    <div className={styles.PresentBox}>
        <img src={presentImg} alt="Dein Geschenk" onClick={props.clicked}/>
        <h3>Alles Gute zum Geburtstag meine Liebe!</h3>
   </div>
);

export default presentBox;
