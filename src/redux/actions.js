import api from "../services/api";

export function addAdvertAction(advert) {
    return { type: "ADD_ADVERT", advert };
}

export function addUserAction(user) {
    return { type: "ADD_USER", user };
}
export function addCategoryAction(category) {
    return { type: "ADD_CATEGORY", category };
}

export function updateUserAction(user) {
    return async dispatch => {
        const response = await api.put(`/users/${user.id}`, user);
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return dispatch(addAdvertAction(response.data));
        return { error: response.data.error.message };
    }
}
export function updateAdvertAction(advert) {
    return async dispatch => {
        const response = await api.put(`/books/${advert.id}/status`, advert);
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return dispatch(addAdvertAction(response.data));
        return { error: response.data.error.message };
    }
}

export function loadAdvertsAction() {
    return async dispatch => {
        const response = await api.get("/books/validate");
        if (!response || !response.data) return;
        dispatch({ type: "SET_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(advert => {
            return dispatch(addAdvertAction(advert));
        });
    };
}

export function loadAdvertPage(page) {
    return async dispatch => {
        const response = await api.get(`/books/validate?page=${page}`);
        if (!response || !response.data) return;
        await dispatch({ type: "CLEAR_ADVERTS" });
        dispatch({ type: "SET_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(advert => {
            return dispatch(addAdvertAction(advert));
        });
    }
}
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

export function loadCategoriesAction() {
    return async dispatch => {
        const response = await api.get("/categories");
        if (!response || !response.data) return;
        dispatch({ type: "SET_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(category => {
            return dispatch(addCategoryAction(category));
        });
    };
}