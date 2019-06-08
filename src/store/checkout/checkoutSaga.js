import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* purchaseInitiated(action) {
    yield localStorage.setItem("purchaseInitiatedId", action.id);
};

function* redirectInit(action) {
    const id = yield localStorage.getItem("purchaseInitiatedId");
    yield put(actions.purchaseInitiated(id));
};

function* checkoutSaga() {
    yield takeEvery(actionTypes.PURCHASE_INITIATED, purchaseInitiated);
    yield takeEvery(actionTypes.REDIRECT_INIT, redirectInit);
}

export default checkoutSaga;