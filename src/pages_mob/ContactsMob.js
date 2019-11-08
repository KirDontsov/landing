import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const ContactsMob = () => (
	<Fragment>
		<Helmet>
			<title>ContactsMob</title>
			<meta name="description" content="ContactsMob" />
		</Helmet>
		<div className="container">
			<h1 className="title">Hello from ContactsMob!</h1>
		</div>
	</Fragment>
);

export default ContactsMob;
