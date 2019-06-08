import React from 'react';
import { AppBar } from '@material-ui/core';

const appBar = (props) => <AppBar {...props}>{props.children}</AppBar>;

export default appBar;