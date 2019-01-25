import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';

function* presentInputSubmitInit(action) {

    try {
        const state = yield select();
        const response = yield call(api.createPresent,action.payload, state.auth);
        yield put(actions.presentInputSubmitSuccess());
        yield console.log(response);
    } catch (e) {
        yield console.log(e);
        yield put(actions.presentInputSubmitError(e));
        // let error = yield "Unspecified error";
        // if (e.response && e.response.data && e.response.data.error
        //     && e.response.data.error.message) {
        //     error = yield e.response.data.error.message;
        // }
        // if (api.errors[error]) {
        //     error = yield api.errors[error];
        // }
        // yield put(actions.authSubmitError(error));
    }
}

function* presentInputSaga() {
    yield takeEvery(actionTypes.PRESENTINPUT_SUBMIT_INIT, presentInputSubmitInit);
}

export default presentInputSaga;