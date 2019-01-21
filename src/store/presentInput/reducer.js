import { getSeconds, getError } from '../../utility/utility';
import * as styles from '../../assets/styles';
import * as actionTypes from './actionTypes';

const initialDueDate = new Date();

const initialState = {
    seconds: getSeconds(initialDueDate),
    inputs: {
        previewText : {
            label: "Invitation text",
            type: 'textarea',
            rows: 5,
            cols: 60,
            validation: {
                minLength: 1,
                maxLength: 300,
                required: true
            },
            value: 'Hello, in <seconds> seconds your present will appear here!'
        },
        dueDate : {
            label: "Due date",
            type: 'datetime',
            clearIcon: null,
            value: initialDueDate
        },
        presentTextBox:
        {
            label: "Present text (box)",
            type: 'textarea',
            rows: 5,
            cols: 60, 
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
            cols: 60, 
            validation: {
                minLength: 1,
                maxLength: 300,
                required: true
            },
            value: 'This is your personal present from us'
        },
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
    result.inputs[action.payload.id].error = getError(result.inputs[action.payload.id].value, 
        result.inputs[action.payload.id].validation);
    return result;
};

const onPresentInputSubmitted = (state, action) => {
    return state;
}

const onPresentCounterIntervalElapsed = (state, action) => {
    const result = deepCopy(state);
    const seconds = getSeconds(result.inputs.dueDate.value);
    if (seconds >= 0) {
        result.seconds = seconds;
    }
    return result;
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRESENTINPUT_VALUE_CHANGED: return onPresentInputValueChanged(state, action);
        case actionTypes.PRESENTINPUT_SUBMIT: return onPresentInputSubmitted(state, action);
        case actionTypes.PRESENT_COUNTER_INTERVAL_ELAPSED: return onPresentCounterIntervalElapsed(state, action);
        default: return state;
    }
}

export default reducer;