import api from '../../services/api';
import { loadUsersAction } from './users';
import { loadAdvertsAction } from './adverts';
import { loadCategoriesAction } from './categories';
import { loadReportsAction } from './reports';
import { setNotificationsAction } from './notifications';

export const SET_USER = 'SET_USER';

export const CHECK_TOKEN = 'CHECK_TOKEN';

export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';

export const LOG_OUT = 'LOG_OUT';

export function setUserAction(user) {
    return { type: SET_USER, user };
}

export function checkIfTokenValid(token) {
    return async dispatch => {
        dispatch({ type: CHECK_TOKEN });
        try {
            const response = await api
                .get('/users/me')
                .catch(e => console.log('ERROR WHILE CHECKING TOKEN', e));
            if (response) {
                if (response.status === 200) {
                    await dispatch(loadAdvertsAction());
                    await dispatch(
                        setNotificationsAction(response.data.notifications)
                    );
                    await dispatch(loadUsersAction());
                    await dispatch(loadCategoriesAction());
                    await dispatch(loadReportsAction());
                    await dispatch(setUserAction({ ...response.data, token }));
                    await dispatch(tokenValidated());
                }
            }
        } catch (e) {
            console.log('ERROR WHILE CHECKING TOKEN', e);
        }
    };
}

export function tokenValidated() {
    return { type: CHECK_TOKEN_SUCCESS };
}

export function logOutAction() {
    return { type: LOG_OUT };
}
