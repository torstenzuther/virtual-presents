import React from 'react';
import Button from '@material-ui/core/Button';

const button = (props) => <Button {...props}>{props.children}</Button>;

export default button;