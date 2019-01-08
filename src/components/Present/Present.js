import React from 'react';
import styles from './Present.module.css';
import presentImg from './present.JPG';

const present = () => (
    <div className={styles.Present}>
        <p>Am 20.03.2019 gehen wir in Leipzig gemeinsam zum russischen Nationalballet!</p>
        <img src={presentImg} alt="Dein Geschenk" />
    </div>
);

export default present;
