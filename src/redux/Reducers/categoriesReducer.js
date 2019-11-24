const INITIAL_STATE = {
    data: []
};

export function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CATEGORIES_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_CATEGORY":
            const categories = state.data.filter(category => category.id !== action.category.id);
            return { ...state, data: [...categories, action.category] };
        default:
            return state;
    }
};