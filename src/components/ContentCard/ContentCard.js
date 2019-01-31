import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import styles from './ContentCard.module.css';

const contentCard = props => {
    return (<Card raised className={styles.card} {...props}>
        <CardHeader title={props.title} />
        <CardContent>{props.children}</CardContent>
        </Card>);
};

export default contentCard;