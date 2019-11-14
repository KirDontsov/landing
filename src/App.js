import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { routes } from "./routes";

import NavigationBar from "./components/NavBar";
import Burger from "./mob_components/Burger";
import Footer from "./components/Footer";
import "./scss/App.scss";

const supportsHistory = "pushState" in window.history;

class App extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	render() {
		const { width } = this.state;
		const isMobile = width <= 768;
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

		if (isMobile) {
			return (
				<Router forceRefresh={!supportsHistory}>
					<Fragment>
						<Helmet>
							<title>РТИ-Торг</title>
							<meta name="description" content="РТИ-Торг" />
						</Helmet>
						<div className="wrapper">
							<Burger routes={routes.filter((route) => route.isMobile)} />
							{/* <h1>Mobile</h1> */}
							{renderSwitch()}
							<Footer routes={routes.filter((route) => route.isFooter)} />
						</div>
					</Fragment>
				</Router>
			);
		} else {
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
}

export default App;
