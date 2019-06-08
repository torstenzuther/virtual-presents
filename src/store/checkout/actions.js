import * as actionTypes from './actionTypes';

export const purchaseInitiated = (id) => {
    return {
        type: actionTypes.PURCHASE_INITIATED,
        id: id
    };
};

export const redirectInit = () => {
    return {
        type: actionTypes.REDIRECT_INIT,
    };
};
