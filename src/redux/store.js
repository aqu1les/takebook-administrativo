import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import advertsReducer from "./Reducers/advertsReducer";
import usersReducer from "./Reducers/usersReducer";
import reportsReducer from "./Reducers/reportsReducer";
import categoriesReducer from "./Reducers/categoriesReducer";
import authReducer from "./Reducers/authReducer";

const reducers = combineReducers({
    adverts: advertsReducer,
    users: usersReducer,
    reports: reportsReducer,
    categories: categoriesReducer,
    auth: authReducer
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
