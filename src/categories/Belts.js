import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Belts = () => (
	<Fragment>
		<Helmet>
			<title>Конвейерная лента</title>
			<meta name="description" content="Конвейерная лента" />
		</Helmet>
		<div className="container__margin">
			<h1>Hello from Belts!</h1>
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

export default Belts;
