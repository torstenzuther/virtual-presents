import React from 'react';
import style from './Modal.module.css';

const modal = props => {
    let modal = (<><div className={style.Backdrop} onClick={props.backdropClicked}></div>
        <div className={style.Modal}>{props.children}</div></>);

    if (!props.show) {
        modal = null;
    }
    return modal;
};

export default modal;