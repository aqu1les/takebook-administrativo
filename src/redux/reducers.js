const INITIAL_STATE = [];

export function advertsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_ADVERT":
            const adverts = state.filter(advert => advert.id !== action.advert.id);
            return [...adverts, action.advert];
        default:
            return state;
    }
};
export function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_USER":
            const users = state.filter(user => user.id !== action.user.id);
            return [...users, action.user];
        default:
            return state;
    }
};
export function reportsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_REPORT":
            const reports = state.filter(report => report.id !== action.report.id);
            return [...reports, action.report];
        default:
            return state;
    }
};
export function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_CATEGORY":
            const categories = state.filter(category => category.id !== action.category.id);
            return [...categories, action.category];
        default:
            return state;
    }
};