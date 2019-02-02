import { getSeconds, getError } from '../../utility/utility';
import * as styles from '../../assets/styles';
import * as actionTypes from './actionTypes';

const initialDueDate = new Date(new Date().getTime() + 300000);

const getMinDate = () => new Date(new Date().getTime() + 60000);

const initialState = {
    error: null,
    submitDisabled: false,
    seconds: getSeconds(initialDueDate),
    inputs: {
        style:
        {
            label: "Style",
            type: 'select',
            options: Object.keys(styles).map(o => {
                return {
                    key: o,
                    value: styles[o].name
                }
            }),
            value: "defaultStyle"
        },
        dueDate : {
            label: "Due date",
            type: 'date',
            clearIcon: null,
            validation: {
                minValue: getMinDate()
            },
            value: initialDueDate
        },
        previewText : {
            label: "Invitation text",
            type: 'textarea',
            rowsMax: 5,
            rows: 5,
            multiline: true,
            validation: {
                minLength: 1,
                maxLength: 300,
                required: true
            },
            value: 'Hello, in <seconds> seconds your present will appear here!'
        },
        presentTextBox:
        {
            label: "Present text (box)",
            type: 'textarea',
            rows: 5,
            cols: 60, 
            rowsMax: 5,
            multiline: true,
            validation: {
                minLength: 1,
                maxLength: 300,
                required: true
            },
            value: 'Happy birtdhay!'
        },
        presentText:
        {
            label: "Present text",
            type: 'textarea',
            rows: 5,
            rowsMax: 5,
            multiline: true,
            cols: 60, 
            validation: {
                minLength: 1,
                maxLength: 300,
                required: true
            },
            value: 'This is your personal present from us'
        }
    }
};

const deepCopy = state => {
    return {
        ...state,
        inputs: {
            ...state.inputs,
            previewText: {
                ...state.inputs.previewText,
                validation: {
                    ...state.inputs.previewText.validation
                }
            },
            dueDate: {
                ...state.inputs.dueDate,
                validation: {
                    ...state.inputs.dueDate.validation
                }
            },
            presentTextBox: {
                ...state.inputs.presentTextBox,
                validation: {
                    ...state.inputs.presentTextBox.validation
                }
            },
            presentText: {
                ...state.inputs.presentText,
                validation: {
                    ...state.inputs.presentText.validation
                }
            },
            style: {
                ...state.inputs.style,
                options: [
                    ...state.inputs.style.options
                ]
            }
        }
    };
};

const onPresentInputValueChanged = (state, action) => {
    const result = deepCopy(state);
    result.inputs[action.payload.id].value = action.payload.value;
    result.inputs[action.payload.id].touched = true;
    result.inputs[action.payload.id].errorMessage = getError(result.inputs[action.payload.id].value, 
        result.inputs[action.payload.id].validation);
    result.inputs[action.payload.id].error = result.inputs[action.payload.id].errorMessage != null;
    return result;
};

const onPresentInputSubmitInit = (state, action) => {
    const result = deepCopy(state);
    return result;
};


const onPresentInputSubmitError = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = false;
    result.error = action.error;
    return result;
};

const onPresentInputSubmitSuccess = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = false;
    return result;
};

const onPresentCounterIntervalElapsed = (state, action) => {
    const result = deepCopy(state);
    const seconds = getSeconds(result.inputs.dueDate.value);
    if (seconds >= 0) {
        result.seconds = seconds;
    }
    result.inputs.dueDate.validation.minValue = getMinDate();
    result.inputs.dueDate.errorMessage = getError(result.inputs.dueDate.value,
        result.inputs.dueDate.validation);
    result.inputs.dueDate.error = result.inputs.dueDate.errorMessage != null;
    return result;
}

const onPresentInputClearError = (state, action) => {
    const result = deepCopy(state);
    result.error = null;
    return result;
}

const onSubmitting = (state, action) => {
    const result = deepCopy(state);
    result.submitDisabled = true;
    return result;
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRESENTINPUT_SUBMIT_ERROR: return onPresentInputSubmitError(state, action);
        case actionTypes.PRESENTINPUT_SUBMIT_SUCCESS: return onPresentInputSubmitSuccess(state, action);
        case actionTypes.PRESENTINPUT_VALUE_CHANGED: return onPresentInputValueChanged(state, action);
        case actionTypes.PRESENTINPUT_SUBMIT_INIT: return onPresentInputSubmitInit(state, action);
        case actionTypes.PRESENT_COUNTER_INTERVAL_ELAPSED: return onPresentCounterIntervalElapsed(state, action);
        case actionTypes.PRESENTINPUT_CLEAR_ERROR: return onPresentInputClearError(state, action);
        case actionTypes.SUBMITTING: return onSubmitting(state, action);
        default: return state;
    }
}

export default reducer;
