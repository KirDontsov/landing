import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const AboutMob = () => (
	<Fragment>
		<Helmet>
			<title>О Нас</title>
			<meta name="description" content="О Нас" />
		</Helmet>
		<div className="container">
			<h1 className="title">Hello from About!</h1>
		</div>
	</Fragment>
);

export default AboutMob;
