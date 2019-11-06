import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { routes } from "./routes";

import NavigationBar from "./components/NavBar";
// import Burger from "./components/Burger";
import Footer from "./components/Footer";
import "./scss/App.scss";

const supportsHistory = "pushState" in window.history;

class App extends Component {
	render() {
		const renderSwitch = () => (
			<Switch>
				{routes.map((route) => {
					const component = route.component;
					return (
						<Route
							key={route.id}
							exact={route.isExact}
							path={route.path}
							component={component}
							status={route.status}
						/>
					);
				})}
			</Switch>
		);
		return (
			<Router forceRefresh={!supportsHistory}>
				<Fragment>
					<Helmet>
						<title>РТИ-Торг</title>
						<meta name="description" content="РТИ-Торг" />
					</Helmet>

					<div className="wrapper">
						<NavigationBar routes={routes.filter((route) => route.isNavBar)} />
						{renderSwitch()}
						<Footer routes={routes.filter((route) => route.isFooter)} />
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
