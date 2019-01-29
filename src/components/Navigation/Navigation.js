import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import * as actions from './../../store/auth/actions';
import AppBar from '@material-ui/core/AppBar';

const navigation = (props) => {
    let signInOrLogout = (<NavLink exact activeClassName={styles.active} 
        to="/signin">Sign in</NavLink>);
    let email = null;
    if (props.token) {
        signInOrLogout = (<Link to="/" onClick={props.onLogout}>Logout</Link>);
        email = <li><span>Signed in as {props.email}</span></li>
    }
    return (
        <AppBar position="static" className={styles.Navigation}>
            <ul>
                <li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/create">Create present</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/signup">Sign up</NavLink></li>
                <li>{signInOrLogout}</li>
                {email}
            </ul>
        </AppBar>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        email: state.auth.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navigation));