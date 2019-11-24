const INITIAL_STATE = {
    data: []
};

export function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USERS_INFO":
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