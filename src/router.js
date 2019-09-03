import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HelloWorld } from './components/Hello';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
            </Switch>
        </BrowserRouter>
    );
}