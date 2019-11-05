import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Cuffs = () => (
	<Fragment>
		<Helmet>
			<title>Гидравлические Манжеты</title>
			<meta name="description" content="Гидравлические Манжеты" />
		</Helmet>
		<div className="container__margin">
			<h1>Hello from Cuffs!</h1>
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

export default Cuffs;
