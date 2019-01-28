import { getSeconds, getError } from '../../utility/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    showBox: true,
    seconds: null,
    preview: {},
    secret: {}
};

const deepCopy = state => {
    return {
        ...state,
        preview: {
            ...state.preview
        },
        secret: {
            ...state.secret
        }
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRESENT_PREVIEW_INIT: return presentPreviewInit(state, action);
        case actionTypes.PRESENT_SECRET_INIT: return presentSecretInit(state, action);
        case actionTypes.PRESENT_VIEW_INIT: return presentViewInit(state, action);
        case actionTypes.SHOW_PRESENT: return showPresent(state, action);
        case actionTypes.PRESENT_TIMER_INTERVAL_ELAPSED: return presentTimerIntervalElapsed(state, action);
        default: return state;
    }
}

export default reducer;
