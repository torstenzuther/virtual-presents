import * as actionTypes from './actionTypes';

export const purchaseInitiated = (id) => {
    return {
        type: actionTypes.PURCHASE_INITIATED,
        id: id
    };
};
