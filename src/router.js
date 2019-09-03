import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//import { HelloWorld } from './components/Hello';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/auth" />} />
                <Route path="/auth" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}