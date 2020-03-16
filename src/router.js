import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Report';
import Adverts from './pages/Adverts';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NotFound from './pages/404-not-found';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { checkIfTokenValid } from './redux/Actions/auth';
import Loading from './pages/Loading';

export default () => {
    const isLoading = useSelector(state => state.auth.loading);
    const authenticated = useSelector(state => state.auth.authenticated);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/login' && location.pathname !== '/') {
            localStorage.setItem('lastPage', location.pathname);
        }
    }, [location]);

    useEffect(() => {
        const token = sessionStorage.getItem('authKey');
        if (token && !authenticated) {
            dispatch(checkIfTokenValid(token));
        }
    }, [dispatch, authenticated]);

    return isLoading ? (
        <Loading />
    ) : (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
                path="/login"
                render={() =>
                    authenticated ? (
                        <Redirect
                            to={
                                localStorage.getItem('lastPage') || '/dashboard'
                            }
                        />
                    ) : (
                        <Login />
                    )
                }
            />
            <PrivateRoute path="/dashboard" authenticated={authenticated}>
                <Layout>
                    <Dashboard />
                </Layout>
            </PrivateRoute>
            <PrivateRoute path="/users" authenticated={authenticated}>
                <Layout>
                    <Users />
                </Layout>
            </PrivateRoute>
            <PrivateRoute path="/adverts" authenticated={authenticated}>
                <Layout>
                    <Adverts />
                </Layout>
            </PrivateRoute>
            <PrivateRoute path="/reports" authenticated={authenticated}>
                <Layout>
                    <Reports />
                </Layout>
            </PrivateRoute>
            <PrivateRoute path="/me" authenticated={authenticated}>
                <Layout>
                    <Profile />
                </Layout>
            </PrivateRoute>
            <Route component={NotFound} />
        </Switch>
    );
};
