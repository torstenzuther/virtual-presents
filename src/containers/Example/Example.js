import React from 'react';
import TimerMessage from '../../components/TimerMessage/TimerMessage';
import PresentBox from '../../components/PresentBox/PresentBox';
import Present from '../../components/Present/Present';
import Icon from '@material-ui/core/Icon';
import styles from './Example.module.css';


const example = (props) => {
    return (
    <div className={styles.exampleBox}>
        <TimerMessage text={props.previewText} 
                cssStyle={props.cssStyle}
                seconds={props.seconds} />
        <Icon style={{fontSize: 48, margin: "auto"}}>arrow_downward</Icon>
        <PresentBox text={props.presentBoxText} img={props.presentImg}
        cssStyle={props.cssStyle} />
        <Icon style={{fontSize: 48, margin: "auto"}}>arrow_downward</Icon>
        <Present text={props.presentText} cssStyle={props.cssStyle}/>
    </div>
    );
}

export default example;