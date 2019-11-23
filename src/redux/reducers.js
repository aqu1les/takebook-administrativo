const INITIAL_STATE = {
    data: []
};

export function advertsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_ADVERT":
            const adverts = state.data.filter(advert => advert.id !== action.advert.id);
            return { ...state, data: [...adverts, action.advert] };
        case "CLEAR_ADVERTS":
            return { ...state, data: [] };
        default:
            return state;
    }
};
export function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_USER":
            const users = state.data.filter(user => user.id !== action.user.id);
            return { ...state, data: [...users, action.user] };
        case "CLEAR_USERS":
            return { ...state, data: [] };
        default:
            return state;
    }
};
export function reportsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_REPORT":
            const reports = state.data.filter(report => report.id !== action.report.id);
            return { ...state, data: [...reports, action.report] };
        default:
            return state;
    }
};
export function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_CATEGORY":
            const categories = state.data.filter(category => category.id !== action.category.id);
            return { ...state, data: [...categories, action.category] };
        default:
            return state;
    }
};