import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./modules/home/Home";
import PrivacyPolicy from "./modules/PrivacyPolicy/PrivacyPolicy";
function Routes(props) {
	return (
		<Route
			render={({ location }) => (
				<Switch location={location}>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/PrivacyPolicy" render={() => <PrivacyPolicy />} />
				</Switch>
			)}
		/>
	);
}

export default Routes;
