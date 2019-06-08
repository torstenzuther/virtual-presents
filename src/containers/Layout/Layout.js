import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';
import Footer from '../../components/Footer/Footer';

const layout = (props) => {
    return (
        <>
            <Navigation />
            <div className={styles.content}>{props.children}</div>
            <Footer></Footer>
        </>
    );
};

export default layout;
