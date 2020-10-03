import api from '../../services/api';
import {
    getBooksToValidate,
    getBooksApproved,
    getBooksRejected,
    getAllBooks,
    booksToValidatePagination,
    getAllBooksPagination,
    refusedBooksPagination,
    approvedBooksPagination,
} from '../../services/AdvertsService';

export const ADD_ADVERT = 'ADD_ADVERT';

export const LOAD_ADVERTS_SUCCESS = 'LOAD_ADVERTS_SUCCESS';

export const LOAD_ADVERTS = 'LOAD_ADVERTS';

export const LOAD_NEXT_PAGE_ADVERTS = 'LOAD_NEXT_PAGE_ADVERTS';

export const LOAD_NEXT_PAGE_ADVERTS_VALIDATE_SUCCESS =
    'LOAD_NEXT_PAGE_ADVERTS_VALIDATE_SUCCESS';

export const LOAD_NEXT_PAGE_ADVERTS_ALL_SUCCESS =
    'LOAD_NEXT_PAGE_ADVERTS_ALL_SUCCESS';

export const LOAD_NEXT_PAGE_ADVERTS_APPROVED_SUCCESS =
    'LOAD_NEXT_PAGE_ADVERTS_APPROVED_SUCCESS';

export const LOAD_NEXT_PAGE_ADVERTS_REFUSED_SUCCESS =
    'LOAD_NEXT_PAGE_ADVERTS_REFUSED_SUCCESS';

export function addAdvertAction(advert) {
    return { type: ADD_ADVERT, advert };
}

export function loadedAdverts(
    allBooks,
    toValidate,
    approvedAdverts,
    rejectedAdverts
) {
    return {
        type: LOAD_ADVERTS_SUCCESS,
        allBooks,
        toValidate,
        approvedAdverts,
        rejectedAdverts,
    };
}

export function updateAdvertAction(advert, statusId) {
    
    return async dispatch => {
        const response = await api.put(`/books/${advert.id}/status`, {
            id: advert.id,
            status_id: advert.status_id,
        });
        console.log(response)
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return { status: 'ok' };
        return { error: response.data.error.message };
    };
}

export function loadAdvertsAction() {
    return async dispatch => {
        await dispatch({ type: LOAD_ADVERTS });
        try {
            const allBooks = await getAllBooks();
            const booksToValidate = await getBooksToValidate();
            const booksApproved = await getBooksApproved();
            const booksRejected = await getBooksRejected();

            await dispatch(
                loadedAdverts(
                    allBooks,
                    booksToValidate,
                    booksApproved,
                    booksRejected
                )
            );
        } catch (e) {
            console.log(e);
        }
    };
}

export function nextPageLoadedAction(booksToValidate) {
    return { type: LOAD_NEXT_PAGE_ADVERTS_VALIDATE_SUCCESS, booksToValidate };
}

export function nextPageLoadedAllAction(all) {
    return { type: LOAD_NEXT_PAGE_ADVERTS_ALL_SUCCESS, all };
}

export function nextPageLoadedApprovedAction(approvedAdverts) {
    return { type: LOAD_NEXT_PAGE_ADVERTS_APPROVED_SUCCESS, approvedAdverts };
}

export function nextPageLoadedRefusedAction(rejectedAdverts) {
    return { type: LOAD_NEXT_PAGE_ADVERTS_REFUSED_SUCCESS, rejectedAdverts };
}

export function loadNextPageAction() {
    return { type: LOAD_NEXT_PAGE_ADVERTS };
}

export function loadNextPageToValidate(page) {
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

export function loadNextPageAllBooks(page) {
    return async dispatch => {
        dispatch(loadNextPageAction());
        try {
            const paginationAllBooks = await getAllBooksPagination(page);
            dispatch(nextPageLoadedAllAction(paginationAllBooks));
        } catch (e) {
            console.log(e);
        }
    };
}

export function loadNextPageApprovedBooks(page) {
    return async dispatch => {
        dispatch(loadNextPageAction());
        try {
            const paginationApprovedBooks = await approvedBooksPagination(page);
            dispatch(nextPageLoadedApprovedAction(paginationApprovedBooks));
        } catch (e) {
            console.log(e);
        }
    };
}

export function loadNextPageRejectedBooks(page) {
    return async dispatch => {
        dispatch(loadNextPageAction());
        try {
            const paginationRefusedBooks = await refusedBooksPagination(page);
            dispatch(nextPageLoadedRefusedAction(paginationRefusedBooks));
        } catch (e) {
            console.log(e);
        }
    };
}
