import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { advertsReducer } from "./Reducers/advertsReducer";
import { usersReducer } from "./Reducers/usersReducer";
import { reportsReducer } from "./Reducers/reportsReducer";
import { categoriesReducer } from "./Reducers/categoriesReducer";

const reducers = combineReducers({
    adverts: advertsReducer,
    users: usersReducer,
    reports: reportsReducer,
    categories: categoriesReducer
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
