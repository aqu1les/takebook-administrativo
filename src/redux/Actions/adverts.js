import api from '../../services/api';
import {
    getBooksToValidate,
    getBooksApproved,
    getBooksRejected,
    booksToValidatePagination,
} from '../../services/AdvertsService';

export const ADD_ADVERT = 'ADD_ADVERT';

export const LOAD_ADVERTS_SUCCESS = 'LOAD_ADVERTS_SUCCESS';

export const LOAD_ADVERTS = 'LOAD_ADVERTS';

export const LOAD_NEXT_PAGE_ADVERTS = 'LOAD_NEXT_PAGE_ADVERTS';

export const LOAD_NEXT_PAGE_ADVERTS_SUCCESS = 'LOAD_NEXT_PAGE_ADVERTS_SUCCESS';

export function addAdvertAction(advert) {
    return { type: ADD_ADVERT, advert };
}

export function loadedAdverts(toValidate, approvedAdverts, rejectedAdverts) {
    return {
        type: LOAD_ADVERTS_SUCCESS,
        toValidate,
        approvedAdverts,
        rejectedAdverts,
    };
}

export function updateAdvertAction(advert) {
    return async dispatch => {
        const response = await api.put(`/books/${advert.id}/status`, {
            id: advert.id,
            status_id: advert.status_id,
        });
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return { status: 'ok' };
        return { error: response.data.error.message };
    };
}

export function loadAdvertsAction() {
    return async dispatch => {
        dispatch({ type: LOAD_ADVERTS });
        try {
            const booksToValidate = await getBooksToValidate();
            const booksApproved = await getBooksApproved();
            const booksRejected = await getBooksRejected();

            dispatch(
                loadedAdverts(booksToValidate, booksApproved, booksRejected)
            );
        } catch (e) {
            console.log(e);
        }
    };
}

export function loadNextPageAction() {
    return { type: LOAD_NEXT_PAGE_ADVERTS };
}

export function loadNextPage(page) {
    return async dispatch => {
        dispatch(loadNextPageAction());
        try {
            const paginationBooksToValidate = await booksToValidatePagination(
                page
            );
            dispatch(nextPageLoadedAction(paginationBooksToValidate));
        } catch (e) {
            console.log(e);
        }
    };
}

export function nextPageLoadedAction(booksToValidate) {
    return { type: LOAD_NEXT_PAGE_ADVERTS_SUCCESS, booksToValidate };
}
