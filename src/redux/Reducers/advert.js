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
    },
    approvedAdverts: {
        data: [],
        nextPage: null,
    },
    rejectedAdverts: {
        data: [],
        nextPage: null,
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
                    data: [
                        ...state.toValidateAdverts.data,
                        ...action.booksToValidate.data,
                    ],
                    nextPage: action.booksToValidate.nextPage,
                },
            };
        }
        case ADD_ADVERT: {
            const adverts = state.toValidateAdverts.filter(
                advert => advert.id !== action.advert.id
            );
            return {
                ...state,
                toValidateAdverts: [action.advert, ...adverts],
            };
        }
        default:
            return state;
    }
}
