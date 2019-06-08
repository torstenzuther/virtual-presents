import * as actionTypes from './actionTypes';

const initialState = { };

const onPurchaseInitiated = (state, action) => {
    const result = { ...state };
    result.purchaseInitiatedId = action.id;
    return result;
}

const onRedirectInit = (state, action) => {
    const result = { ...state };
    return result;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INITIATED: return onPurchaseInitiated(state, action);
        case actionTypes.REDIRECT_INIT: return onRedirectInit(state, action);
        default: return state;
    }
};

export default reducer;
