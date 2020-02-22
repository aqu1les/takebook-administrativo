import api from '../../services/api';

export const ADD_USER = 'ADD_USER';
export const CLEAR_USERS = 'CLEAR_USERS';
export const SET_USERS_INFO = 'SET_USERS_INFO';

export function clearUsersAction() {
    return { type: CLEAR_USERS };
}

export function setUsersInfoAction(info) {
    return { type: SET_USERS_INFO, info }
}

export function loadUserPage(page) {
    return async dispatch => {
        const response = await api.get(`/users?page=${page}`);
        if (!response || !response.data) return;
        await dispatch(clearUsersAction());
        dispatch(setUsersInfoAction({ ...response.data, data: [] }));
        response.data.data.map(user => {
            return dispatch(addUserAction(user));
        });
    }
}

export function addUserAction(user) {
    return { type: ADD_USER, user };
}

export function updateUserAction(user) {
    return async dispatch => {
        const response = await api.put(`/users/${user.id}`, user);
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return dispatch(addUserAction(response.data));
        return { error: response.data.error.message };
    }
}

export function loadUsersAction() {
    return async dispatch => {
        const response = await api.get('/users');
        if (!response || !response.data) return;
        dispatch(setUsersInfoAction({ ...response.data, data: [] }));
        response.data.data.map(user => {
            return dispatch(addUserAction(user));
        });
    };
}