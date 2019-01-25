import axios from 'axios';

const apiKey = 'AIzaSyDcLVPNH3iMOv1WlxTph3oVGYoIDO0npzE';

const errors = {
    "EMAIL_NOT_FOUND": "No user with given email exists",
    "INVALID_PASSWORD": "Invalid password. Please try again",
    "USER_DISABLED": "The use has been disabled",
    "EMAIL_EXISTS": "The email address is already in use",
    "OPERATION_NOT_ALLOWED": "Password sign in has been disabeld",
    "TOO_MANY_ATTEMPTS_TRY_LATER": "Too many failed attempts. Please try again later"
};

const presentEndpoint = axios.create({
    baseURL: 'https://virtual-presents.firebaseio.com/',
    timeout: 1000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

const authEndpoint = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
    timeout: 1000
  });

const signUpUser = (emailPassword) => {
    return authEndpoint.post(`signupNewUser?key=${apiKey}`, {
        email: emailPassword.email,
        password: emailPassword.password,
        returnSecureToken: true
    });
};

const signInUser = (emailPassword) => {
    return authEndpoint.post(`verifyPassword?key=${apiKey}`, {
        email: emailPassword.email,
        password: emailPassword.password,
        returnSecureToken: true
    });
};

const createPresent = (present, auth) => {
    present.createdAt = {
        ".sv": "timestamp"
    };
    present.userId = auth.userId;
    return presentEndpoint.post('present.json?auth=' + auth.token, present);
};

const api = {
    signInUser: signInUser,
    signUpUser: signUpUser,
    createPresent: createPresent,
    errors: errors
}

export default api;
