export function setUserAction(user) {
    return { type: "SET_USER", user };
}
export function addNotificationAction(notification) {
    return { type: "ADD_NOTIFICATION", notification };
}
export function openNotificationAction(notification) {
    return { type: "OPEN_NOTIFICATION", notification };
}
