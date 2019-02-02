import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as authActions from './../auth/actions';
import api from './../../api/api';

function* presentInputSubmitInit(action) {

    try {
        if (action.auth.token) {
            yield put(actions.submitting());
            yield call(api.createPresent, action.present, action.auth);
            yield put(actions.presentInputSubmitSuccess());
        } else {
            yield put(authActions.onSetRedirect("/create"));
            yield action.history.replace("/signin");
        }
    } catch (e) {
        const error = yield api.getError(e);
        yield put(actions.presentInputSubmitError(error));
    }
}

function* presentInputSaga() {
    yield takeEvery(actionTypes.PRESENTINPUT_SUBMIT_INIT, presentInputSubmitInit);
}

export default presentInputSaga;