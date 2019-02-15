import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const sideDrawer = (props) =>  {

    const sideList = (
        <List>
          
          <ListItem><img src={logo} alt="" width="45px" height="45px" /></ListItem>
          {props.items.map((item, index) => (
            item.route 
            ? <ListItem key={index}
                {...{ to: item.route, exact: true }} 
                component={NavLink}  button={true}>
            <ListItemText primary={item.name} /></ListItem>
            : <ListItem key={index} onClick={item.action} button={true}>
            <ListItemText primary={item.name} /></ListItem>
          ))}
        </List>
    );

    return (
        <SwipeableDrawer open={props.open}
          onClose={props.toggleOpen}
          onOpen={props.toggleOpen}
          disableBackdropTransition={!iOS} disableDiscovery={iOS}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleOpen}
            onKeyDown={props.toggleOpen}>
            {sideList}
          </div>
        </SwipeableDrawer>
    );
}

export default sideDrawer;