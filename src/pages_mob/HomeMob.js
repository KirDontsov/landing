import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const HomeMob = () => (
	<Fragment>
		<Helmet>
			<title>HomeMob</title>
			<meta name="description" content="HomeMob" />
		</Helmet>
		<div className="container">
			<h1 className="title">Hello from HomeMob!</h1>
		</div>
	</Fragment>
);

export default HomeMob;
