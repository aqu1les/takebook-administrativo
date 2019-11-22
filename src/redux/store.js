import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import {
    advertsReducer,
    usersReducer,
    reportsReducer,
    categoriesReducer
} from "./reducers";

const reducers = combineReducers({
    adverts: advertsReducer,
    users: usersReducer,
    reports: reportsReducer,
    categories: categoriesReducer
});
export default createStore(reducers, applyMiddleware(ReduxThunk)); 