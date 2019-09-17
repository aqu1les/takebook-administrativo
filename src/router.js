import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Report';
import Adverts from './pages/Adverts';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Layout from './components/Layout';

export default () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" render={() => <Layout><Dashboard /></Layout>} />
            <Route path="/users" render={() => <Layout><Users /></Layout>} />
            <Route path="/adverts" render={() => <Layout><Adverts /></Layout>} />
            <Route path="/reports" render={() => <Layout><Reports /></Layout>} />
            <Route path="/me" render={() => <Layout><Profile /></Layout>} />
            <Route component={() => <h1>Page not found</h1>} />
        </Switch>
    );
}