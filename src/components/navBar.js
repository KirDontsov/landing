import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import "../scss/Nav.scss";

const NavigationBar = (props) => (
	<div className="nav-wrapper">
		<div className="center">
			<div className="nav__top">
				<div className="left__text">
					<p>Время работы: с 8:00 до 16:00</p>
				</div>
				<div className="right__text">
					<a href="tel:84956401225" className="phone">
						+7 (495) 640 12 25
					</a>
					<p>rti-torg@gmail.com</p>
				</div>
			</div>
		</div>
		<div className="center">
			<nav>
				{props.routes.map((route) => (
					<NavLink
						className={route.className}
						exact={route.isExact}
						activeClassName="active"
						key={route.path}
						to={route.path}
					>
						{route.name}
					</NavLink>
				))}
			</nav>
			<Search />
		</div>
	</div>
);

export default NavigationBar;

NavigationBar.propTypes = {
	routes: PropTypes.array
};
