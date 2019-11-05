import React, { Fragment } from "react";
import "../scss/Benefits.scss";

const NavigationBar = () => (
	<Fragment>
		<div className="container__margin black">
			<div className="center col">
				<h2 className="title">Наши преимущества</h2>
				<p className="text benefits">
					Их нет. Мы обычная компания, которая сама ищет производителей РТИ в разных
					странах договаривается о сотрудничестве, закупает продукцию в большом
					объеме, привозит на свой склад в г. Екатеринбург и продает вам, стараясь
					доставить в срок.
				</p>
				<div className="benefits">
					<div className="col">
						<h2 className="title">Гарантии</h2>
						<p className="text">
							Если вам не понравится качество поставляемой продукции, мы вернем вам
							деньги, в обмен на возврат товара.
						</p>
					</div>
					<div className="col">
						<h2 className="title">Скидки</h2>
						<p className="text">
							Их нет, мы заранее договорились с производителем о самых низких ценах.
						</p>
					</div>
					<div className="col">
						<h2 className="title">Доставка</h2>
						<p className="text">По всей России.</p>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default NavigationBar;
