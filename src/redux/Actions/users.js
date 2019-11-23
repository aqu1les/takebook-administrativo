import api from "../../services/api";

export function loadUserPage(page) {
    return async dispatch => {
        const response = await api.get(`/users?page=${page}`);
        if (!response || !response.data) return;
        await dispatch({ type: "CLEAR_USERS" });
        dispatch({ type: "SET_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(user => {
            return dispatch(addUserAction(user));
        });
    }
}

export function addUserAction(user) {
    return { type: "ADD_USER", user };
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
        const response = await api.get("/users");
        if (!response || !response.data) return;
        dispatch({ type: "SET_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(user => {
            return dispatch(addUserAction(user));
        });
    };
}