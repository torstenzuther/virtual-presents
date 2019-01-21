import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import * as actions from './../../store/auth/actions';

const navigation = (props) => {
    let signInOrLogout = (<NavLink exact activeClassName={styles.active} 
        to="/signin">Sign in</NavLink>);
    if (props.token) {
        signInOrLogout = (<Link to="/" onClick={props.onLogout}>Logout</Link>);
    }
    return (
        <div className={styles.Navigation}>
            <ul>
                <li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/create">Create present</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/signup">Sign up</NavLink></li>
                <li>{signInOrLogout}</li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navigation));