import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import advertsReducer from './Reducers/advert';
import usersReducer from './Reducers/user';
import reportsReducer from './Reducers/report';
import categoriesReducer from './Reducers/category';
import authReducer from './Reducers/authentication';
import notificationsReducer from './Reducers/notification';

const reducers = combineReducers({
    adverts: advertsReducer,
    users: usersReducer,
    reports: reportsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    notifications: notificationsReducer
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
