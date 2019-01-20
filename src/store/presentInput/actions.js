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

export const presentInputSubmitted = () => {
    return {
        type: actionTypes.PRESENTINPUT_SUBMIT
    };
};
