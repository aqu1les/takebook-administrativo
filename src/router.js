import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Report';
import Adverts from './pages/Adverts';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NotFound from './pages/404-not-found';
import Layout from './components/Layout';
import Requests from './pages/Requests';

export default () => {
    const authenticated = useSelector(state => state.auth.authenticated);

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/login' />} />
            <Route
                path='/login'
                render={() =>
                    authenticated ? (
                        <Redirect to='/dashboard' />
                    ) : (
                            <Login />
                        )
                }
            />
            <Route
                path='/dashboard'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Dashboard />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route
                path='/users'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Users />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route
                path='/adverts'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Adverts />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route
                path='/reports'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Reports />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route
                path='/me'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Profile />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route
                path='/requests'
                render={() =>
                    authenticated ? (
                        <Layout>
                            <Requests />
                        </Layout>
                    ) : (
                            <Redirect to='/login' />
                        )
                }
            />
            <Route component={NotFound} />
        </Switch>
    );
};
