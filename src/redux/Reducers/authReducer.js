const INITIAL_STATE = {};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, ...action.user };
        case "LOG_OUT":
            return {};
        default:
            return state;
    }
};