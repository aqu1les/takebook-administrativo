import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Report";
import Adverts from "./pages/Adverts";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default () => {
	return (
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/login" />} />
			<Route
				path="/login"
				render={() =>
					sessionStorage.getItem("authKey") ? (
						<Redirect to="/dashboard" />
					) : (
						<Login />
					)
				}
			/>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/users" component={Users} />
			<Route path="/adverts" Component={Adverts} />
			<Route path="/reports" Component={Reports} />
			<Route path="/me" Component={Profile} />
			<Route component={() => <h1>Page not found</h1>} />
		</Switch>
	);
};
