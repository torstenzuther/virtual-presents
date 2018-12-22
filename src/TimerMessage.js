import React from 'react';
import styles from './TimerMessage.module.css';

const timerMessage = (props) => {
    return (
    <div class={styles.TimerMessage}>
    <p>Meine liebe Nastja, in <strong>{props.seconds} Sekunden</strong> ist es so weit und hier wird dein Geburtstagsgeschenk erscheinen!
    </p>
    </div>)
  
}

export default timerMessage;