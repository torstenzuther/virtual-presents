import * as actionTypes from './actionTypes';

const initialState = {
    purchaseInitiatedId: localStorage.getItem("purchaseInitiatedId")
};

const onPurchaseInitiated = (state, action) => {
    const result = { ...state };
    result.purchaseInitiatedId = action.id;
    return result;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INITIATED: return onPurchaseInitiated(state, action);
        default: return state;
    }
};

export default reducer;
