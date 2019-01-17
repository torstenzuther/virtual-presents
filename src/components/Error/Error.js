import React from 'react';
import Modal from './../Modal/Modal';

const error = props => {
    return (
        <Modal backdropClicked={props.onClose} 
            show={props.show}><div><p>{props.error}</p><button onClick={props.onClose}>Close</button></div></Modal>
    );
};

export default error;