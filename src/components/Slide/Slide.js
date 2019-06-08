import React from 'react';
import { Slide } from '@material-ui/core';

const slide = (props) => <Slide {...props}>{props.children}</Slide>;

export default slide;