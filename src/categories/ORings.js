import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Categories from "./Categories";

const ORings = () => (
	<Fragment>
		<Helmet>
			<title>Уплотнительные кольца</title>
			<meta name="description" content="Уплотнительные кольца" />
		</Helmet>
		<div className="container__margin">
			<div className="heading">
				<h1 className="title">Уплотнительные кольца</h1>
			</div>
			<div className="container">
				{Categories.map((category) => {
					return (
						category.index === 0 && (
							<img
								key={category.index}
								className="category__img"
								src={category.src}
								alt={category.headline}
							/>
						)
					);
				})}
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

export default ORings;
