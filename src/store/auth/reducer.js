import * as actionTypes from './actionTypes';
import { getError } from './../../utility/utility';

const initialState = {
    error: null,
    submitDisabled: false,
    inputs: {
        email : {
            label: "Email",
            type: 'email',
            value: '',
            validation: {
                required: true,
                email: true
            }
        }, 
        password: {
            label: "Password",
            type: 'password',
            value: '',
            validation: {
                minLength: 6,
                required: true
            }
        }
    }
};

const deepCopy = state => {
    return {
        ...state,
        inputs: {
            ...state.inputs,
            email: {
                ...state.inputs.email,
                validation: {
                    ...state.inputs.email.validation
                }
            },
            password: {
                ...state.inputs.password,
                validation: {
                    ...state.inputs.password.validation
                }
            },
        }
    };
};

const onAuthValueChanged = (state, action) => {
    const result = deepCopy(state);
    result.inputs[action.payload.id].value = action.payload.value;
    result.inputs[action.payload.id].touched = true;
    result.inputs[action.payload.id].error = getError(result.inputs[action.payload.id].value, 
        result.inputs[action.payload.id].validation);
    return result;
};

const onAuthSubmitInit = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = true;
    result.error = null;
    return result;
};

const onAuthSubmitSuccess = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = false;
    result.userId = action.payload.userId;
    result.email = action.payload.email;
    result.token = action.payload.token;
    result.error = null;
    return result;
};

const onAuthSubmitError = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = false;
    if (!result.userId) {
        result.userId = null;
        result.email = null;
        result.token = null;
    }
    
    result.error = action.error;
    return result;
};

const onAuthClearError = (state, action) => {
    const result = deepCopy(state);
    result.error = null;
    return result;
};

const onLogout = (state, action) => {
    const result = deepCopy(state);
    result.userId = null;
    result.email = null;
    result.token = null;
    result.error = null;
    return result;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUBMIT_INIT: return onAuthSubmitInit(state, action);
        case actionTypes.AUTH_SUBMIT_SUCCESS: return onAuthSubmitSuccess(state, action);
        case actionTypes.AUTH_SUBMIT_ERROR: return onAuthSubmitError(state, action);
        case actionTypes.AUTH_VALUE_CHANGED: return onAuthValueChanged(state, action);
        case actionTypes.AUTH_CLEAR_ERROR: return onAuthClearError(state, action);
        case actionTypes.LOGOUT: return onLogout(state, action);
        default: return state;
    }
};

export default reducer;
