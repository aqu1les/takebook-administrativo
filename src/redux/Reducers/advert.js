import {
    LOAD_ADVERTS,
    LOAD_ADVERTS_SUCCESS,
    LOAD_NEXT_PAGE_ADVERTS,
    LOAD_NEXT_PAGE_ADVERTS_SUCCESS,
    ADD_ADVERT,
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
    all: [],
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
                all: [
                    ...action.toValidate.data,
                    ...action.approvedAdverts.data,
                    ...action.rejectedAdverts.data,
                ],
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS: {
            return {
                ...state,
                loadingMore: true,
            };
        }
        case LOAD_NEXT_PAGE_ADVERTS_SUCCESS: {
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
