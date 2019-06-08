import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const navButton = (props) => <Button component={NavLink}
    activeClassName={props.activeClassName} to={props.to} {...props}>{props.children}
</Button>;

export default navButton;