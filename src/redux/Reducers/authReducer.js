const INITIAL_STATE = {
    authenticated: false
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USER":
            sessionStorage.setItem("authKey", action.user.token);
            return { ...state, ...action.user, authenticated: true };
        case "LOG_OUT":
            sessionStorage.removeItem("authKey");
            return { authenticated: false };
        default:
            return state;
    }
}
