export const SET_USER = 'SET_USER';

export const CHECK_TOKEN = 'CHECK_TOKEN';

export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';

export const LOG_OUT = 'LOG_OUT';

export function setUserAction(user) {
    return { type: SET_USER, user };
}

export function checkIfTokenValid() {
    return { type: CHECK_TOKEN };
}

export function tokenValidated() {
    return { type: CHECK_TOKEN_SUCCESS };
}

export function logOutAction() {
    return { type: LOG_OUT };
}
