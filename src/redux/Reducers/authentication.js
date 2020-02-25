import {
    SET_USER,
    CHECK_TOKEN,
    CHECK_TOKEN_SUCCESS,
    LOG_OUT,
} from '../Actions/auth';
import * as serviceWorker from '../../serviceWorker';
import api from '../../services/api';

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER:
            sessionStorage.setItem('authKey', action.user.token);
            return {
                ...state,
                ...action.user,
                authenticated: true,
                loading: false,
            };
        case CHECK_TOKEN:
            return {
                ...state,
                loading: true,
            };
        case CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case LOG_OUT:
            sessionStorage.removeItem('authKey');
            const swclient = JSON.parse(sessionStorage.getItem('swclient'));
            if (swclient) {
                api.delete(`/sw/subscriptions/${swclient.id}`);
            }
            serviceWorker.unregister();
            return { authenticated: false, loading: false };
        default:
            return state;
    }
}
