const INITIAL_STATE = {
    loading: false,
    loadingMore: false,
    toValidateAdverts: [],
    approvedAdverts: [],
    rejectedAdverts: [],
    allAdverts: [],
    nextPage: null
};

export default function advertsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOAD_ADVERTS":
            return {
                ...state,
                loading: true
            };
        case "LOAD_ADVERTS_SUCCESS":
            const toValidate = action.adverts.filter(advert => advert.status_id === 1);
            const approvedAdverts = action.adverts.filter(advert => advert.status_id === 2);
            const rejectedAdverts = action.adverts.filter(advert => advert.status_id === 3);
            return {
                ...state,
                loading: false,
                toValidateAdverts: toValidate,
                approvedAdverts: approvedAdverts,
                rejectedAdverts: rejectedAdverts,
                allAdverts: action.adverts,
                nextPage: action.nextPage
            };
        case "LOAD_NEXT_PAGE_ADVERTS":
            return {
                ...state,
                loadingMore: true
            };
        case "LOAD_NEXT_PAGE_ADVERTS_SUCCESS":
            return {
                ...state,
                loadingMore: false,
                toValidateAdverts: [...state.toValidateAdverts, ...action.adverts],
                nextPage: action.nextPage
            };
        case "ADD_ADVERT":
            const adverts = state.toValidateAdverts.filter(advert => advert.id !== action.advert.id);
            return {
                ...state,
                toValidateAdverts: [action.advert, ...adverts]
            };
        default:
            return state;
    }
};
