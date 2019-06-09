import React from 'react';
import Button from './../../components/Button/Button';
import Slide from './../../components/Slide/Slide';
import IconButton from './../../components/IconButton/IconButton';
import Icon from './../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import styles from './QrCodeModal.module.css';
import QrCode from '../../components/QrCode/QrCode';
import Modal from './../../components/Modal/Modal';
import { withRouter } from 'react-router-dom';
import * as config from '../../utility/config';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class QrCodeModal extends React.Component {

  render() {
    const presentLink = `${config.frontendUrl}presents/${this.props.presentId}`;
    const actions = (<>
      <Button onClick={this.props.handleClose} color="primary">Close</Button>
      <Button color="primary" onClick={() => {
        this.props.history.push(`/qr/${encodeURIComponent(presentLink)}`)
      }}>Open QR Code</Button>
      <Button color="primary" onClick={() => {
        this.props.history.push(`/presents/${this.props.presentId}`)
      }}>Checkout</Button>
      </>);
    return (
      <Modal open={this.props.open} TransitionComponent={Transition} keepMounted
        onClose={this.handleClose}
        maxWidth={"sm"}
        fullWidth={true}
        title={"Your Little Joy"}
        actions={actions}>
        <div className={styles.linkBox}>
          <QrCode qrCode={presentLink} />
          <div className={styles.input}>
            <Input type="text" disabled value={presentLink}></Input>
            <IconButton color="inherit" onClick={() => {
              navigator.clipboard.writeText(presentLink);
            }}>
              <Icon>file_copy</Icon>
            </IconButton>
          </div>
        </div>
      </Modal>
    );
  }
}


export default withRouter(QrCodeModal);