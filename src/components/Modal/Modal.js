import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const modal = props => {
    return (<Dialog open={props.open} TransitionComponent={props.TransitionComponent}
        keepMounted={props.keepMounted} onClose={props.onClose} 
    maxWidth={props.maxWidth}
    fullWidth={props.fullWidth}>
    <DialogTitle>{props.title}</DialogTitle>
    <DialogContent>
      {props.children}
    </DialogContent>
    <DialogActions>
      {props.actions}
    </DialogActions>
  </Dialog>);
};

export default modal;