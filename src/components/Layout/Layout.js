import React from 'react';
import Navigation from './../Navigation/Navigation';
import styles from './Layout.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';

const layout = (props) => {
    return (
        <>
            <CssBaseline />
            <Navigation />
            <div className={styles.content}>{props.children}</div>
        </>
    );
};

export default layout;
