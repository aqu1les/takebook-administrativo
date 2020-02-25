import {
    LOAD_ADVERTS,
    LOAD_ADVERTS_SUCCESS,
    LOAD_NEXT_PAGE_ADVERTS,
    LOAD_NEXT_PAGE_ADVERTS_VALIDATE_SUCCESS,
    ADD_ADVERT,
    LOAD_NEXT_PAGE_ADVERTS_ALL_SUCCESS,
    LOAD_NEXT_PAGE_ADVERTS_APPROVED_SUCCESS,
    LOAD_NEXT_PAGE_ADVERTS_REFUSED_SUCCESS,
} from '../Actions/adverts';

const INITIAL_STATE = {
    loading: false,
    loadingMore: false,
    toValidateAdverts: {
        data: [],
        nextPage: null,
        total: 0,
    },
    approvedAdverts: {
        data: [],
        nextPage: null,
        total: 0,
    },
    rejectedAdverts: {
        data: [],
        nextPage: null,
        total: 0,
    },
    all: {
        data: [],
        nextPage: null,
        total: 0,
    },
};

export default function advertsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_ADVERTS: {
            return {
                ...state,
                loading: true,
            };
        }
        case LOAD_ADVERTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                toValidateAdverts: action.toValidate,
                approvedAdverts: action.approvedAdverts,
                rejectedAdverts: action.rejectedAdverts,
                all: action.allBooks,
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS: {
            return {
                ...state,
                loadingMore: true,
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS_VALIDATE_SUCCESS: {
            return {
                ...state,
                loadingMore: false,
                toValidateAdverts: {
                    ...state.toValidateAdverts,
                    data: [
                        ...state.toValidateAdverts.data,
                        ...action.booksToValidate.data,
                    ],
                    nextPage: action.booksToValidate.nextPage,
                    total: action.booksToValidate.total,
                },
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS_ALL_SUCCESS: {
            return {
                ...state,
                loadingMore: false,
                all: {
                    ...state.all,
                    data: [...state.all.data, ...action.all.data],
                    nextPage: action.all.nextPage,
                    total: action.all.total,
                },
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS_APPROVED_SUCCESS: {
            return {
                ...state,
                loadingMore: false,
                approvedAdverts: {
                    ...state.approvedAdverts,
                    data: [
                        ...state.approvedAdverts.data,
                        ...action.approvedAdverts.data,
                    ],
                    nextPage: action.approvedAdverts.nextPage,
                    total: action.approvedAdverts.total,
                },
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS_REFUSED_SUCCESS: {
            return {
                ...state,
                loadingMore: false,
                rejectedAdverts: {
                    ...state.rejectedAdverts,
                    data: [
                        ...state.rejectedAdverts.data,
                        ...action.rejectedAdverts.data,
                    ],
                    nextPage: action.rejectedAdverts.nextPage,
                    total: action.rejectedAdverts.total,
                },
            };
        }
        case ADD_ADVERT: {
            const toValidateAdverts = removeAdvertFromArray(
                state.toValidateAdverts,
                action.advert
            );
            const approvedAdverts = removeAdvertFromArray(
                state.approvedAdverts,
                action.advert
            );
            const rejectedAdverts = removeAdvertFromArray(
                state.rejectedAdverts,
                action.advert
            );
            return {
                ...state,
                toValidateAdverts: {
                    ...state.toValidateAdverts,
                    data: [action.advert, ...toValidateAdverts],
                    total: state.toValidateAdverts.total + 1,
                },
                approvedAdverts: {
                    ...state.approvedAdverts,
                    data: [action.advert, ...approvedAdverts],
                    total: state.approvedAdverts.total + 1,
                },
                rejectedAdverts: {
                    ...state.rejectedAdverts,
                    data: [action.advert, ...rejectedAdverts],
                    total: state.rejectedAdverts.total + 1,
                },
            };
        }
        default:
            return state;
    }
}

function removeAdvertFromArray(array, advertToRemove) {
    return array.filter(advert => advert.id !== advertToRemove.id);
}
