import api from "../../services/api";

export function addAdvertAction(advert) {
    return { type: "ADD_ADVERT", advert };
}

export function loadedAdverts(adverts, nextPage) {
    return { type: "LOAD_ADVERTS_SUCCESS", adverts, nextPage };
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
        dispatch({ type: 'LOAD_ADVERTS'});
        const response = await api.get("/books");
        if (!response || !response.data) return;
        const nextPageUrl = response.data.next_page_url;
        dispatch(loadedAdverts(response.data.data, nextPageUrl ? nextPageUrl.split('=')[1] : null));
    };
}

export function loadNextPage(page) {
    return async dispatch => {
        dispatch({ type: 'LOAD_NEXT_PAGE_ADVERTS' });
        const response = await api.get(`/books?page=${page}`);
        if (!response || !response.data) return;
        const nextPageUrl = response.data.next_page_url;
        dispatch({ type: 'LOAD_NEXT_PAGE_ADVERTS_SUCCESS', adverts: response.data.data, nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null });
    }
}
