import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/create">Create present</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );
};

export default navigation;