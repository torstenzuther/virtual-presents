import { call, put, takeEvery, fork, delay } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from './../../api/api';
import jwt_decode from 'jwt-decode';

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
        yield put(actions.onSetRedirect("/"));
        
    } catch (e) {
        yield authLogout();
        const error = yield api.getError(e);
        yield put(actions.authSubmitError(error));
    }
            
}

function* authSubmitSuccess(action) {
    const token = yield jwt_decode(action.payload.token);
    const now = new Date();
    const expiryDate = new Date(token.exp*1000);
    let tokenValidityPeriod = yield expiryDate.getTime() - now.getTime();
    yield localStorage.setItem("userId", action.payload.userId);
    yield localStorage.setItem("email", action.payload.email);
    yield localStorage.setItem("token", action.payload.token);
    if (tokenValidityPeriod < 0) {
        tokenValidityPeriod = 0;
    }
    yield delay(tokenValidityPeriod);
    yield put(actions.logout());
}

function* authLogout() {
    yield localStorage.removeItem("userId");
    yield localStorage.removeItem("email");
    yield localStorage.removeItem("token");
}

function* authInit() {
    const token = yield localStorage.getItem("token");
    if (token) {
        const userId = yield localStorage.getItem("userId");
        const email = yield localStorage.getItem("email");
        yield put(actions.authSubmitSuccess({
            userId, token, email
        }));
    }
}

function* authSaga() {
    yield fork(authInit);
    yield takeEvery(actionTypes.AUTH_SUBMIT_INIT, authSubmitInit);
    yield takeEvery(actionTypes.AUTH_SUBMIT_SUCCESS, authSubmitSuccess);
    yield takeEvery(actionTypes.LOGOUT, authLogout);
}

export default authSaga;