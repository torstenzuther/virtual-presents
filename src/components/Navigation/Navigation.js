import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <ul>
                <li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/create">Create present</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/auth">Sign in</NavLink></li>
            </ul>
        </div>
    );
};

export default navigation;