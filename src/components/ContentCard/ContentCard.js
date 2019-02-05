import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import styles from './ContentCard.module.css';

const contentCard = props => {
    let header = null;
    if (props.title) {
        header = (<CardHeader title={props.title} titleTypographyProps={
            {style: {
                textAlign: "center"
            }}
        } />);
    }
    return (<Card raised className={styles.card} {...props}>
        {header}
        <CardContent>{props.children}</CardContent>
        </Card>);
};

export default contentCard;