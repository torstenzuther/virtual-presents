import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as authActions from './../auth/actions';
import api from './../../api/api';

function* presentInputSubmitInit(action) {

    try {
        if (action.auth.token) {
            yield put(actions.submitting());
            const response = yield call(api.createPresent, action.present, action.auth);
            yield put(actions.presentInputSubmitSuccess(response.data.name));
        } else {
            yield put(authActions.onSetRedirect("/create"));
            yield action.history.replace("/signin");
        }
    } catch (e) {
        const error = yield api.getError(e);
        yield put(actions.presentInputSubmitError(error));
    }
}

function* presentInputSubmitSuccess(action) {
    yield put(actions.setPresentCreated(action.presentId));
}

function* presentInputSaga() {
    yield takeEvery(actionTypes.PRESENTINPUT_SUBMIT_INIT, presentInputSubmitInit);
    yield takeEvery(actionTypes.PRESENTINPUT_SUBMIT_SUCCESS, presentInputSubmitSuccess);
}

export default presentInputSaga;