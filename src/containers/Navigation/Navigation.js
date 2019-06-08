import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/auth/actions';
import AppBar from './../../components/AppBar/AppBar';
import NavButton from './../../components/NavButton/NavButton';
import Button from './../../components/Button/Button';
import Toolbar from './../../components/Toolbar/Toolbar';
import IconButton from './../../components/IconButton/IconButton';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import logo from './../../assets/logo.png';
import Text from './../../components/Text/Text';
import Icon from './../../components/Icon/Icon';

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
                    (<NavButton key={mi.name}
                        exact activeClassName={styles.active} to={mi.route}>{mi.name}
                    </NavButton>)
                : (<Button key={mi.name} onClick={mi.action}>{mi.name}</Button>)
            )
        
        return (
            <AppBar className={styles.Navigation}>
                <Toolbar>
                    <div className={styles.MobileNavMenuIcon}>
                        <IconButton color="inherit" onClick={this.onSideDrawerToggle}>
                            <Icon>menu</Icon>
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
                        <Text>{this.props.email}</Text>
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