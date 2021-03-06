import * as actionTypes from './actionTypes';

export const presentInputValueChanged = (id, value) => {
    return {
        type: actionTypes.PRESENTINPUT_VALUE_CHANGED,
        payload: {
            id: id,
            value: value
        }
    };
};

export const presentInputCounterIntervalElapsed = () => {
    return {
        type: actionTypes.PRESENT_COUNTER_INTERVAL_ELAPSED
    };
};

export const presentInputSubmitInit = (present, auth, history) => {
    return {
        type: actionTypes.PRESENTINPUT_SUBMIT_INIT,
        present: present,
        auth: auth,
        history: history
    };
};

export const presentInputSubmitSuccess = (presentId) => {
    return {
        type: actionTypes.PRESENTINPUT_SUBMIT_SUCCESS,
        presentId: presentId
    };
};

export const presentInputSubmitError = (error) => {
    return {
        type: actionTypes.PRESENTINPUT_SUBMIT_ERROR,
        error: error
    };
};

export const presentInputClearError = () => {
    return {
        type: actionTypes.PRESENTINPUT_CLEAR_ERROR,
    };
};

export const submitting = () => {
    return {
        type: actionTypes.SUBMITTING,
    };
};

export const setPresentCreated = (presentId) => {
    return {
        type: actionTypes.SET_PRESENT_CREATED,
        presentId: presentId
    };
};

