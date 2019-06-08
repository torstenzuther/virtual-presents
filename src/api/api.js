import axios from 'axios';
import * as config from './../utility/config';


const errorCodeMapping = {
    "EMAIL_NOT_FOUND": "User does not exist",
    "INVALID_PASSWORD": "Invalid password. Please try again",
    "USER_DISABLED": "The user has been disabled",
    "EMAIL_EXISTS": "The email address is already in use",
    "OPERATION_NOT_ALLOWED": "Password sign in has been disabeld",
    "TOO_MANY_ATTEMPTS_TRY_LATER": "Too many failed attempts. Please try again later"
};

const baseUrl = axios.create({
    baseURL: config.backendUrl,
    timeout: 3000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

const authUrl = axios.create({
    baseURL: config.identityUrl,
    timeout: 3000
  });

const signUpUser = (emailPassword) => {
    return authUrl.post(`signupNewUser?key=${config.apiKey}`, {
        email: emailPassword.email,
        password: emailPassword.password,
        returnSecureToken: true
    });
};

const signInUser = (emailPassword) => {
    return authUrl.post(`verifyPassword?key=${config.apiKey}`, {
        email: emailPassword.email,
        password: emailPassword.password,
        returnSecureToken: true
    });
};


const getPresentPreview = (id) => {
    return baseUrl.get(`present/${id}/preview.json`);
};

const getPresentSecret = (id) => {
    return baseUrl.get(`present/${id}/secret.json`);
};

const getPaymentStatus = (id) => {
    return baseUrl.get(`payment/${id}/paymentstatus.json`);
}

const createPresent = (present, auth) => {
    const presentTransformed = {
        preview: {
            previewText: present.previewText,
            dueDate: present.dueDate.getTime(),
            style: present.style,
        },
        secret: {
            presentTextBox: present.presentTextBox,
            presentText: present.presentText
        }
    };
    presentTransformed.createdAt = {
        ".sv": "timestamp"
    };
    presentTransformed.userId = auth.userId;
    return baseUrl.post('present.json?auth=' + auth.token, presentTransformed);
};

const getError = (e) => {
    let error = "Unspecified error";
    if (e && e.message) {
        error = e.message;
    }
    if (e.response && e.response.data && e.response.data.error
        && e.response.data.error.message) {
        error = e.response.data.error.message;
    }
    if (errorCodeMapping[error]) {
        error = errorCodeMapping[error];
    }
    return error;
}

const api = {
    signInUser: signInUser,
    signUpUser: signUpUser,
    createPresent: createPresent,
    getPresentPreview: getPresentPreview,
    getPresentSecret: getPresentSecret,
    getError: getError,
    getPaymentStatus: getPaymentStatus
}

export default api;
