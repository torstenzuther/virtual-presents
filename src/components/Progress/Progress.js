import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const progress = (props) => <CircularProgress {...props}>{props.children}</CircularProgress>;

export default progress;