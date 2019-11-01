import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Burger = () => (
	<Fragment>
		<div className="menu back menu--4">
			<label>
				<input type="checkbox" />
				<svg id="menu" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path className="line--1" d="M0 55l14-10c4.7-3.3 9-5 13-5h72" />
					<path className="line--2" d="M0 50h99" />
					<path className="line--3" d="M0 45l14 10c4.7 3.3 9 5 13 5h72" />
				</svg>
			</label>
		</div>
	</Fragment>
);

export default Burger;

Burger.propTypes = {
	routes: PropTypes.array
};
