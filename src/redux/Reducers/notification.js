import {
    ADD_NOTIFICATION,
    OPEN_NOTIFICATION,
    SET_NOTIFICATIONS,
} from '../Actions/notifications';

const INITIAL_STATE = {
    data: [],
    unseen: 0,
};

export default function notificationsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NOTIFICATIONS: {
            const unseen = action.notifications.filter(filterUnseen).length;
            return { ...state, data: action.notifications, unseen };
        }
        case ADD_NOTIFICATION: {
            return {
                ...state,
                data: [action.notification, ...state.data],
            };
        }
        case OPEN_NOTIFICATION: {
            const notifications = state.data.map(notification =>
                notification.id === action.notification.id
                    ? { ...notification, opened: 1 }
                    : notification
            );
            const unseen = state.data.filter(filterUnseen).length;
            return {
                ...state,
                data: notifications,
                unseen,
            };
        }
        default: {
            return state;
        }
    }
}

function filterUnseen(notification) {
    return notification.opened !== 1;
}
