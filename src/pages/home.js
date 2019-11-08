import React, { Fragment } from "react";
import Slider from "../components/Slider";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

import slideData from "../categories/Categories";

const Home = () => (
	<Fragment>
		<div className="container__margin">
			<div className="heading">
				<h1 className="title main">Большой выбор по приемлемым ценам</h1>
			</div>
			<Slider heading="Slider" slides={slideData} />
			<Benefits />
			<Testimonials />
		</div>
	</Fragment>
);

export default Home;
