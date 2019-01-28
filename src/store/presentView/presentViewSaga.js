import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';
import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { getSeconds } from './../../utility/utility';


function* presentViewInit(action) {
    try {
        const response = yield call(api.getPresentPreview, action.id);
        let seconds = yield getSeconds(response.data.dueDate);
        console.log(seconds);
        if (seconds <= 0) {
            yield put(actions.presentPreviewInit(response.data));
            try {
                const response = yield call(api.getPresentSecret,action.id);
                yield put(actions.presentSecretInit(response.data));
            }
            catch(e) {
                console.log(e);
            };
        } else {
            while (yield seconds > 0) {
                yield delay(1000);
                console.log(seconds);
                seconds = seconds - 1;
            }
            try {
                const response = yield call(api.getPresentSecret,action.id);
                yield put(actions.presentSecretInit(response.data));
            }
            catch(e) {
                console.log(e);
            };
        }
    } catch (e) {
        console.log(e);
    }
};


function* presentViewSaga() {
    yield takeEvery(actionTypes.PRESENT_VIEW_INIT, presentViewInit);
}

export default presentViewSaga;