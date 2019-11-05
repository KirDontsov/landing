import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { routes } from "./routes";
import NavigationBar from "./components/NavBar";
// import Burger from "./components/Burger";
import Footer from "./components/Footer";
import "./scss/App.scss";
import "./scss/Nav.scss";
import "./scss/Footer.scss";
import "./scss/News.scss";
import "./scss/Slider.scss";
import "./scss/Benefits.scss";
import "./scss/Bb8.scss";
import "./scss/Testimonials.scss";
import "./scss/Search.scss";

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
			<Router>
				<Fragment>
					<Helmet>
						<title>РТИ-Торг</title>
						<meta name="description" content="РТИ-Торг" />
					</Helmet>

					{/* <Burger /> */}
					<NavigationBar routes={routes.filter((route) => route.isNavBar)} />
					{renderSwitch()}
					<Footer routes={routes.filter((route) => route.isFooter)} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
