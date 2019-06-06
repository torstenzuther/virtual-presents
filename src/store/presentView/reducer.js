import * as actionTypes from './actionTypes';

const initialState = {
    showBox: true,
    seconds: null,
    preview: null,
    secret: null,
    error: false,
    paymentNeeded: false,
};

const deepCopy = state => {
    return {
        ...state,
        preview: state.preview ? {
            ...state.preview
        } : null,
        secret: state.secret ? {
            ...state.secret
        } : null
    };
};

const presentPreviewInit = (state, action) => {
    const result = deepCopy(state);
    result.preview = action.preview;
    return result;
};

const presentSecretInit = (state, action) => {
    const result = deepCopy(state);
    result.secret = action.secret;
    return result;
};

const presentViewInit = (state, action) => {
    const result = deepCopy(state);
    return result;
};

const showPresent = (state, action) => {
    const result = deepCopy(state);
    result.showBox = false;
    return result;
};

const presentTimerIntervalElapsed = (state, action) => {
    const result = deepCopy(state);
    result.seconds = action.seconds;
    return result;
};

const presentError = (state, action) => {
    const result = deepCopy(state);
    result.error = true;
    return result;
};

const presentPayment = (state, action) => {
    const result = deepCopy(state);
    result.paymentNeeded = true;
    return result;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRESENT_PREVIEW_INIT: return presentPreviewInit(state, action);
        case actionTypes.PRESENT_SECRET_INIT: return presentSecretInit(state, action);
        case actionTypes.PRESENT_VIEW_INIT: return presentViewInit(state, action);
        case actionTypes.SHOW_PRESENT: return showPresent(state, action);
        case actionTypes.PRESENT_ERROR: return presentError(state, action);
        case actionTypes.PRESENT_TIMER_INTERVAL_ELAPSED: return presentTimerIntervalElapsed(state, action);
        case actionTypes.PRESENT_PAYMENT: return presentPayment(state, action);
        default: return state;
    }
}

export default reducer;
