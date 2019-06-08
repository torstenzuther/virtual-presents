import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import styles from './PresentCard.module.css';

const presentCard = props => {
    if (!props.title) {
        return <div className={styles.card}>{props.children}</div>;
    }
    return (<ContentCard className={styles.card} {...props}>{props.children}</ContentCard>);
};

export default presentCard;