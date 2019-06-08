import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const iconButton = (props) => <IconButton {...props}>{props.children}</IconButton>;

export default iconButton;