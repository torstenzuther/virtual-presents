import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';

function* presentInputSubmitInit(action) {

    try {
        const state = yield select();
        yield call(api.createPresent, action.payload, state.auth);
        yield put(actions.presentInputSubmitSuccess());
    } catch (e) {
        const error = yield api.getError(e);
        yield put(actions.presentInputSubmitError(error));
    }
}

function* presentInputSaga() {
    yield takeEvery(actionTypes.PRESENTINPUT_SUBMIT_INIT, presentInputSubmitInit);
}

export default presentInputSaga;