import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import Adverts from './pages/Adverts';
import Users from './pages/Users';
import Layout from './components/Layout';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/auth" />} />
                <Route path="/auth" component={Login} />
                <Switch>
                    <Layout>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/users" component={Users} />
                        <Route path="/adverts" component={Adverts} />
                        <Route path="/reports" component={Report} />
                    </Layout>
                </Switch>
            </Switch>
        </BrowserRouter>
    );
}