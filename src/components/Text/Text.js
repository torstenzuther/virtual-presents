import React from 'react';
import { Typography } from '@material-ui/core';

const text = (props) => <Typography {...props}>{props.children}</Typography>;

export default text;