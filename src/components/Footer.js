import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Footer = (props) => (
	<Fragment>
		<div className="footer">
			<div className="col__center">
				<div className="col">
					{props.routes.map((route) =>
						route.id <= 10 ? (
							<NavLink
								className={route.className}
								exact={route.isExact}
								activeClassName="active"
								key={route.path}
								to={route.path}
							>
								{route.name}
							</NavLink>
						) : null
					)}
				</div>
				<div className="col">
					{props.routes.map((route) =>
						route.id > 10 ? (
							<NavLink
								className={route.className}
								exact={route.isExact}
								activeClassName="active"
								key={route.path}
								to={route.path}
							>
								{route.name}
							</NavLink>
						) : null
					)}
				</div>
			</div>
		</div>
	</Fragment>
);

export default Footer;

Footer.propTypes = {
	routes: PropTypes.array
};
