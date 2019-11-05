import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Categories from "./Categories";

const Belts = () => (
	<Fragment>
		<Helmet>
			<title>Конвейерная лента</title>
			<meta name="description" content="Конвейерная лента" />
		</Helmet>
		<div className="container__margin">
			<div className="heading">
				<h1 className="title">Конвейерная лента</h1>
			</div>

			<div className="container">
				<div className="center">
					{Categories.map((category) => {
						return (
							category.index === 3 && (
								<img
									key={category.index}
									className="category__img"
									src={category.src}
									alt={category.headline}
								/>
							)
						);
					})}
				</div>
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
