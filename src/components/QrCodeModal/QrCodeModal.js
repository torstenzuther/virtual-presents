import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import FileCopy from '@material-ui/icons/FileCopyOutlined';
import Input from './../Input/Input';
import styles from './QrCodeModal.module.css';
import QrCode from '../../components/QrCode/QrCode';
import { withRouter } from 'react-router-dom';

function Transition(props)  {
  return <Slide direction="up" {...props} />;
}

class QrCodeModal extends React.Component {

  render() {
    const presentLink = `https://virtual-presents.firebaseapp.com/presents/${this.props.presentId}`;
    return (
        <Dialog open={this.props.open} TransitionComponent={Transition} keepMounted 
          onClose={this.handleClose} 
          maxWidth={"xs"}
          fullWidth={true}>
          <DialogTitle>{"Your Grinch Card"}</DialogTitle>
          <DialogContent>
            <div className={styles.linkBox}>
            <div className={styles.input}>
              <Input type="text" disabled value={presentLink}></Input>
              <IconButton color="inherit">
                <FileCopy />
              </IconButton>
              </div>
              <QrCode qrCode={presentLink} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Close
            </Button>
            <Button  color="primary" onClick={()=> {
              this.props.history.replace(`/qr/${encodeURIComponent(presentLink)}`)}}>
              Open QR Code
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}


export default withRouter(QrCodeModal);