import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import * as actions from './../../store/auth/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './../SideDrawer/SideDrawer';
import { Typography } from '@material-ui/core';
import logo from './../../assets/logo.png';

class Navigation extends Component {

    state = {
        open: false
    };

    onSideDrawerToggle = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        });
    }


    render() {

        const menuItems = [
            { route: "/", name: "Home" },
            { route: "/create", name: "Create Little Joy" },
        ];

        if (!this.props.token) {
            menuItems.push({ route: "/signup", name: "Sign up" });
            menuItems.push({ route: "signin", name: "Sign in" });
        } else {
            menuItems.push({ name: "Logout", action: this.props.onLogout})
        }
        
        const desktopMenu = 
            menuItems.map(mi => 
                mi.route 
                ?
                    (<Button key={mi.name} component={NavLink} 
                        exact activeClassName={styles.active} to={mi.route}>{mi.name}
                    </Button>)
                : (<Button key={mi.name} onClick={mi.action}>{mi.name}</Button>)
            )
        
        return (
            <AppBar className={styles.Navigation}>
                <Toolbar>
                    <div className={styles.MobileNavMenuIcon}>
                        <IconButton color="inherit" onClick={this.onSideDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <SideDrawer open={this.state.open} onClose={this.onSideDrawerToggle} 
                            toggleOpen={this.onSideDrawerToggle} items={menuItems}>
                        </SideDrawer>
                    </div>
                    <div className={styles.DesktopMenuItem}>
                        <img src={logo} alt="" width="45px" height="45px" />
                        <div className={styles.shifted}>
                        {desktopMenu}</div>
                    </div>
                    <div className={styles.login}>
                        <Typography>{this.props.email}</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));