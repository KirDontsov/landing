import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Contacts = () => (
	<Fragment>
		<Helmet>
			<title>Контакты</title>
			<meta name="description" content="Контакты" />
		</Helmet>
		<div className="container__margin">
			<div className="heading">
				<h1 className="title">Hello from Contacts!</h1>
			</div>

			<div className="container">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt
					mollitia animi consequuntur perferendis, ipsa impedit? Tempore nostrum,
					voluptate labore laboriosam quam cumque autem, magnam sit, veritatis at
					assumenda a.
				</p>
			</div>
		</div>
	</Fragment>
);

export default Contacts;
