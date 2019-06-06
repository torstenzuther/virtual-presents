import * as actionTypes from './actionTypes';

export const showPresent = () => {
    return {
        type: actionTypes.SHOW_PRESENT
    };
};

export const presentViewInit = (id) => {
    return {
        type: actionTypes.PRESENT_VIEW_INIT,
        id: id
    };
};

export const presentPreviewInit = (preview) => {
    return {
        type: actionTypes.PRESENT_PREVIEW_INIT,
        preview: preview
    };
};

export const presentSecretInit = (secret) => {
    return {
        type: actionTypes.PRESENT_SECRET_INIT,
        secret: secret
    };
};

export const presentTimerIntervalElapsed = (seconds, id) => {
    return {
        type: actionTypes.PRESENT_TIMER_INTERVAL_ELAPSED,
        seconds: seconds,
        id: id
    };
};


export const presentError = () => {
    return {
        type: actionTypes.PRESENT_ERROR,
    };
};

export const presentPayment = (id) => {
    return {
        type: actionTypes.PRESENT_PAYMENT,
        id: id
    };
}
