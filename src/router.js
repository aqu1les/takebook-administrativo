import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadAdvertsAction } from "./redux/Actions/adverts";
import { loadUsersAction } from "./redux/Actions/users";
import { loadReportsAction } from "./redux/Actions/reports";
import { setUserAction } from "./redux/Actions/auth";
import api from "./services/api";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Report";
import Adverts from "./pages/Adverts";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import notFound from "./pages/404-not-found";
import Layout from "./components/Layout";

export default () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const token = sessionStorage.getItem("authKey");
    useEffect(() => {
        async function getInfo(token) {
            const response = await api.get("/users/me");
            if (response) {
                if (response.status === 200) {
                    dispatch(setUserAction({ ...response.data, token }));
                }
            }
        }
        if (token) {
            getInfo(token);
            dispatch(loadAdvertsAction());
            dispatch(loadUsersAction());
            dispatch(loadReportsAction());
        }
    }, [token, dispatch]);

    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
                path="/login"
                render={() =>
                    auth.authenticated ? (
                        <Redirect to="/dashboard" />
                    ) : (
                            <Login />
                        )
                }
            />
            <Route
                path="/dashboard"
                render={() =>
                    auth.authenticated ? (
                        <Layout>
                            <Dashboard />
                        </Layout>
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
            <Route
                path="/users"
                render={() =>
                    auth.authenticated ? (
                        <Layout>
                            <Users />
                        </Layout>
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
            <Route
                path="/adverts"
                render={() =>
                    auth.authenticated ? (
                        <Layout>
                            <Adverts />
                        </Layout>
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
            <Route
                path="/reports"
                render={() =>
                    auth.authenticated ? (
                        <Layout>
                            <Reports />
                        </Layout>
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
            <Route
                path="/me"
                render={() =>
                    auth.authenticated ? (
                        <Layout>
                            <Profile />
                        </Layout>
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
            <Route component={notFound} />
        </Switch>
    );
};
