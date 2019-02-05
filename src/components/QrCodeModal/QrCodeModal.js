import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

function Transition(props)  {
  return <Slide direction="up" {...props} />;
}

class QrCodeModal extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const presentLink = `https://virtual-presents.firebaseapp.com/presents/${this.props.presentId}`;
    return (
        <Dialog open={this.state.open} TransitionComponent={Transition} keepMounted 
          onClose={this.handleClose}>
          <DialogTitle>{"Your Grinch Card"}</DialogTitle>
          <DialogContent>
            <DialogContentText><a href={presentLink}>{"Your Grinch Card"}</a>
            </DialogContentText>
            <QRCode value={presentLink} width={"350px"} height={"350px"} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}


export default QrCodeModal;