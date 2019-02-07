import React from 'react';
import QRCode from 'qrcode.react';

const qrCode = (props) => {
    const presentLink = props.qrCode || decodeURIComponent(props.match.params.id);
    return (
        <QRCode value={presentLink} />
    );
};


export default qrCode;