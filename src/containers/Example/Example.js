import React from 'react';
import TimerMessage from '../TimerMessage/TimerMessage';
import PresentBox from '../PresentBox/PresentBox';
import Present from '../Present/Present';
import styles from './Example.module.css';
import Icon from './../../components/Icon/Icon';

const example = (props) => {
    const arrowIcon =  <Icon style={{fontSize: 48, margin: "auto"}}>arrow_downward</Icon>;
    return (
    <div className={styles.exampleBox}>
        <TimerMessage text={props.previewText} 
                cssStyle={props.cssStyle}
                seconds={props.seconds} />
        {arrowIcon}
        <PresentBox text={props.presentBoxText} component={props.presentComponent}
        cssStyle={props.cssStyle} />
        {arrowIcon}
        <Present text={props.presentText} cssStyle={props.cssStyle}/>
    </div>
    );
}

export default example;