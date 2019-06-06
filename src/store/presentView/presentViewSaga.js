import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';
import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { getSeconds } from './../../utility/utility';


function* presentViewInit(action) {
    try {
        const paymentResponse = yield call(api.getPaymentStatus, action.id);
        if (paymentResponse.data !== "Completed") {
            yield put(actions.presentPayment(action.id));
        } else {
            const response = yield call(api.getPresentPreview, action.id);
            let seconds = yield getSeconds(response.data.dueDate);
            yield put(actions.presentPreviewInit(response.data));
            yield elapseTimer(action.id, seconds, false);
        }
    } catch (e) {
        yield put(actions.presentError());
    }
};

function* getPresentSecret(id) {
    try {
        const response = yield call(api.getPresentSecret, id);
        yield put(actions.presentSecretInit(response.data));
    }
    catch(e) {
        yield put(actions.presentError());
    };
}

function* presentTimerIntervalElapsed(action) {
    yield elapseTimer(action.id, action.seconds, true);
}

function* elapseTimer(id, seconds, del) {

    if (seconds <= 0) {
        yield getPresentSecret(id);
    } else {
        if (del) {
            yield delay(1000);
        }
        yield put(actions.presentTimerIntervalElapsed(seconds - 1, id));
    }

}

function* presentViewSaga() {
    yield takeEvery(actionTypes.PRESENT_VIEW_INIT, presentViewInit);
    yield takeEvery(actionTypes.PRESENT_TIMER_INTERVAL_ELAPSED, presentTimerIntervalElapsed);
}

export default presentViewSaga;