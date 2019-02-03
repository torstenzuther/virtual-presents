import React from 'react';
import ContentCard from './../ContentCard/ContentCard';
import styles from './PresentCard.module.css';

const presentCard = props => {
    return (<ContentCard className={styles.card} {...props}>{props.children}</ContentCard>);
};

export default presentCard;