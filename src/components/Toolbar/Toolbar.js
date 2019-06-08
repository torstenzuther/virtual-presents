import React from 'react';
import { Toolbar } from '@material-ui/core';

const toolbar = (props) => <Toolbar {...props}>{props.children}</Toolbar>;

export default toolbar;