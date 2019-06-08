import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

function* purchaseInitiated(action) {
    yield localStorage.setItem("purchaseInitiatedId", action.id);
}

function* checkoutSaga(action) {
    yield takeEvery(actionTypes.PURCHASE_INITIATED, purchaseInitiated);
}

export default checkoutSaga;