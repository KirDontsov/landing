import React, { Fragment } from "react";

const NavigationBar = () => (
	<Fragment>
		<div className="container__margin black">
			<div className="center col">
				<h2 className="title">Наши преимущества</h2>
				<p className="text">
					Их нет. Мы обычная компания, которая сама ищет кофе в странах
					произрастания, покупает его у фермеров, качественно его обжаривает и
					продает вам, стараясь доставить в срок.
				</p>
				<div className="benefits">
					<div className="col">
						<h2 className="title">Гарантии</h2>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure
							numquam molestiae quidem quos ad nesciunt vel laborum eveniet
							praesentium! Qui, doloribus! Molestias voluptate repudiandae maiores non
							accusamus ad ipsa.
						</p>
					</div>
					<div className="col">
						<h2 className="title">Скидки</h2>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure
							numquam molestiae quidem quos ad nesciunt vel laborum eveniet
							praesentium! Qui, doloribus! Molestias voluptate repudiandae maiores non
							accusamus ad ipsa.
						</p>
					</div>
					<div className="col">
						<h2 className="title">Доставка</h2>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure
							numquam molestiae quidem quos ad nesciunt vel laborum eveniet
							praesentium! Qui, doloribus! Molestias voluptate repudiandae maiores non
							accusamus ad ipsa.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default NavigationBar;
