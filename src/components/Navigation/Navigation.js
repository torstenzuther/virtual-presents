import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import * as actions from './../../store/auth/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Badge } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

const navigation = (props) => {
    let signInOrLogout = (<Button component={NavLink} exact activeClassName={styles.active} 
        to="/signin">Sign in</Button>);
    let email = null;
    if (props.token) {
        const logout = (<Button component={Link} to="/" onClick={props.onLogout}><ExitToApp /></Button>);
        signInOrLogout = <Badge badgeContent={props.email}>{logout}</Badge>;
    }
    return (
        <AppBar className={styles.Navigation}>
            <Toolbar>
                <Button component={NavLink} exact activeClassName={styles.active} to="/">Home</Button>
                <Button component={NavLink} exact activeClassName={styles.active} to="/create">Create present</Button>
                <Button component={NavLink} exact activeClassName={styles.active} to="/about">About</Button>
                <Button component={NavLink} exact activeClassName={styles.active} to="/signup">Sign up</Button>
                {signInOrLogout}
                {email}
            </Toolbar>
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