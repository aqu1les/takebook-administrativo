import * as serviceWorker from '../../serviceWorker';
import api from "../../services/api";

const INITIAL_STATE = {
    authenticated: false
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USER":
            sessionStorage.setItem("authKey", action.user.token);
            const notificationsCount = action.user.notifications.filter(notification => notification.opened === 0).length;
            return { ...state, ...action.user, authenticated: true, notificationsCount };
        case "ADD_NOTIFICATION":
            return { ...state, notifications: [action.notification, ...state.notifications], notificationsCount: state.notificationsCount + 1 };
        case "OPEN_NOTIFICATION":
            const notifications = state.notifications.map(notification => notification.id === action.notification.id ? { ...notification, opened: 1 } : notification);
            return { ...state, notifications, notificationsCount: state.notificationsCount - 1 };
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
