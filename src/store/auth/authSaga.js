import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';

function* authSubmitInit(action) {

    try {
        const response = yield call(action.signIn 
                ? api.signInUser 
                : api.signUpUser, action.authData);

        yield put(actions.authSubmitSuccess({
            userId: response.data.localId,
            token: response.data.idToken,
            email: response.data.email
        }));
    } catch (e) {
        let error = yield "Unspecified error";
        if (e.response && e.response.data && e.response.data.error
            && e.response.data.error.message) {
            error = yield e.response.data.error.message;
        }
        if (api.errors[error]) {
            error = yield api.errors[error];
        }
        yield put(actions.authSubmitError(error));
    }
            
}

function* authSaga() {
    yield takeEvery(actionTypes.AUTH_SUBMIT_INIT, authSubmitInit);
}

export default authSaga;