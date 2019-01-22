import * as actionTypes from './actionTypes';

export const authValueChanged = (id, value) => {
    return {
        type: actionTypes.AUTH_VALUE_CHANGED,
        payload: {
            id: id,
            value: value
        }
    };
};

export const authSubmitInit = (authData, signIn) => {
    return {
        type: actionTypes.AUTH_SUBMIT_INIT,
        authData: authData,
        signIn: signIn
    };
};

export const authSubmitError = (error) => {
    return {
        type: actionTypes.AUTH_SUBMIT_ERROR,
        error: error
    };
};

export const authClearError = () => {
    return {
        type: actionTypes.AUTH_CLEAR_ERROR
    };
};

export const authSubmitSuccess = (payload) => {
    return {
        type: actionTypes.AUTH_SUBMIT_SUCCESS,
        payload: payload
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    };
};
