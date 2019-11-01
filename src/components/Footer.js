import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => (
	<Fragment>
		<div className="footer">
			<div className="col__center">
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
			</div>
		</div>
	</Fragment>
);

export default NavigationBar;

NavigationBar.propTypes = {
	routes: PropTypes.array
};
