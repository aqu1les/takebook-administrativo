import * as serviceWorker from '../../serviceWorker';
import api from '../../services/api';

const INITIAL_STATE = {
    authenticated: false
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USER":
            sessionStorage.setItem("authKey", action.user.token);
            return { ...state, ...action.user, authenticated: true };
        case "ADD_NOTIFICATION":
            return { ...state, notifications: [action.notification, ...state.notifications] };
        case "LOG_OUT":
            sessionStorage.removeItem("authKey");
            const swclient = JSON.parse(sessionStorage.getItem('swclient'));
            if (swclient) {
                api.delete(`/sw/subscriptions/${swclient.id}`);
            }
            serviceWorker.unregister();
            return { authenticated: false };
        default:
            return state;
    }
}
